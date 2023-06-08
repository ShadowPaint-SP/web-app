import { fail, type Actions, redirect } from "@sveltejs/kit";
import { zfd } from "zod-form-data";

import { PrismaClient } from "@prisma/client";
import { object } from "zod";

const db = new PrismaClient()

async function slugify(text:string) {
  return text.replace(/\s/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
}

export const actions: Actions = {
  default:async ({ request }) => {
    const formData = await request.formData()
    const message = String(formData.get('chatname'))
    const createSchema = zfd.formData({
      chatname: zfd.text()
    })
    const result = createSchema.safeParse(formData)

    if (!result.success) {
      const data = {
        data: Object.fromEntries(formData),
        errors: result.error.flatten().fieldErrors
      }
      return fail(400, data)
    }

    const slug =await slugify(message)

    const test = await db.chats.findFirst({
      where:{
        slug: slug
      }
    })

    // check if entry already exists ( workaround because @unique doesnt work)
    if (test !== null) {
      const data = {
          data: Object.fromEntries(formData),
          errors: 'this chat already exists'
        }
        return fail(400, data)
    }

    const chat = await db.chats.create({
      data: {
        slug: slug,
        title: message,
        content: []
      }
    })

    // check if the entry is created
    if (chat == null) {
      const data = {
          data: Object.fromEntries(formData),
          errors: 'something went wrong while creating the entry'
        }
        return fail(400, data)
    }

    throw redirect(303, '/chat/'+slug)
  }
}

