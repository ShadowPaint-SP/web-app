import { fail, type Actions, redirect } from "@sveltejs/kit";
import { zfd } from "zod-form-data";

import { PrismaClient } from "@prisma/client";


const db = new PrismaClient()

async function wordcount(str:string) {
	const count = str.split(' ')
	return count.length >= 5
}

async function shortener(str:string) {
  const words = str.split(' ')
  const fivewords = words.slice(0, 5)
  return fivewords.join(' ')
}

async function slugify(text:string) {
  return text.replace(/\s/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
}

export const actions: Actions = {
  default:async ({ request }) => {
    const formData = await request.formData()
    const message = String(formData.get('chatname'))
    const mode = Number(formData.get('mode'))
		const version = String(formData.get('version'))
		const link = Number(formData.get('link')) === 1

    // weird shit
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

    		// checks
		if(!message){
			return fail(400, { message, missing: true })
		}
		
		if (!await wordcount(message)) {
			return fail(400, { message, longer: true})
		}
    // preparation/ slugify
    const mshort = await shortener(message)
    const slug =await slugify(mshort)

    // check if entry already exists
    const test = await db.chats.findFirst({
      where:{
        slug: slug
      }
    })
    if (test !== null) {
      console.log('object :>> ');
      const data = {
          data: Object.fromEntries(formData),
          errors: 'this chat already exists'
        }
        return fail(400, data)
    }

    // create new chat
    let number = 0
    
    const chat = await db.chats.create({
      data: {
        slug: slug,
        title: mshort + " ...",
        content: [
          {
            id: String(number),
            text: message
          }
        ]
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

    number += 1

    // make the api call for the message

    interface Item {
      mode: number
      version: string
      recourcelink: boolean
      text: string
    }

    const requestBody: Item = {mode: mode, version: version, recourcelink: link, text: message }

    console.log('requestBody :>> ', requestBody);

    const response = await fetch('http://127.0.0.1:8000/test/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })
    const data = await response.json();


		// create response entry
		await db.chats.update({
				where:{
					slug: slug
				}, 
				data:{
					content:{
						push:{
							id: String(number),
              state: false,
							text: data.text,
						}
					},
				}
			}
		)

    throw redirect(303, '/chat/'+slug)
  }
}

// I need a shortener for the message
//