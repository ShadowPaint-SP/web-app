import { error, type Actions, fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { PrismaClient } from "@prisma/client";
const db = new PrismaClient()

// here we get the existing content of the chat ( we populate it )
export const load: PageServerLoad = async ({ params }) => {
	console.log('params :>> ', params);
	const chat = await db.chats.findUnique({
		where: { slug: params.slug}
	})

	if (!chat) {
		throw error(404, 'Chat not Found 😢')
	}
	return { chat }
}

// just sleep
async function sleep(ms:number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

// the real thing
export const actions: Actions = {
	addMessage: async ({ request }) => {
		const formData = await request.formData()
		const message = String(formData.get('messagesend'))
		const errors: Record<string, unknown> = {}

		if(!message){
			return fail(400, { message, missing: true })
		}

		if (message.length < 5) {
			return fail(400, { message, longer: true})
		}

		if(Object.keys(errors).length > 0){
			const data = {
				data: Object.fromEntries(formData),
				errors
			}
			return fail(400, data)
		}


		// here i create the database entry and also make the api request
		await sleep(2000)


		return { success: true }
	}
}



