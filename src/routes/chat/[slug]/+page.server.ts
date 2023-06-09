import { error, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { PrismaClient } from "@prisma/client";
import { defaultInclude } from "vitest/config";
import { string } from "zod";
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

		interface Item {
			text: string
		}
		// checks
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

		// get the slug (should be simpler but for now)
		const chat = await db.chats.findUnique({
			where: { slug: params.slug}
		})
		let number = 0
		if (chat !== null) {
			number = chat.content.length
			number += 1
		}
		

		// create request chat entry
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
		try{
			console.log('message sent :>> ');
			const request: Item = { text: message }
			const response = await fetch('http://127.0.0.1:8000/request/',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(request)
			})
			const data = await response.json();
			console.log('responseData :>> ', data);

		} catch (error) {

			console.error(`Error in load function for /: ${error}`);
			const data = {
				data: Object.fromEntries(formData),
				errors
			}
			return fail(400, data)
		}


		// create KI answer db entry

		return { success: true }
	}
}



