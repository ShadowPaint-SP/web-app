import { error, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { PrismaClient } from "@prisma/client";
import { defaultInclude } from "vitest/config";
const db = new PrismaClient()



// here we get the existing content of the chat ( we populate it )
export const load: PageServerLoad = async ({ params }) => {
	console.log('params pageload :>> ', params);
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
	addMessage: async ({ request, params, }) => {
		const formData = await request.formData()
		const message = String(formData.get('messagesend'))

		
		const errors: Record<string, unknown> = {}

		console.log('params action :>> ', params);

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

		const chat = await db.chats.findUnique({
			where: { slug: params.slug}
		})
		let number = 0
		if (chat !== null) {
			number = chat.content.length
			number += 1
		}
		console.log('number :>> ', number);
		
		await db.chats.update({
				where:{
					slug: params.slug
				}, 
				data:{
					content:{
						push:{
							id: String(number),
							text: message,
						}
					},
				}
			}
		)
		
		// make KI request

		// create KI answer db entry

		return { success: true }
	}
}



