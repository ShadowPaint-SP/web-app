import { error, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";
import { setMode, setVersion, recourceLink } from '../../store'
import type { Writable } from "svelte/store";
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
//async function sleep(ms:number) {
//	return new Promise((resolve) => setTimeout(resolve, ms))
//}

// the real thing
export const actions: Actions = {
	addMessage: async ({ request, params, url }) => {
		const formData = await request.formData()
		const message = String(formData.get('messagesend'))

		
		// checks
		if(!message){
			return fail(400, { message, missing: true })
		}
		
		if (message.length < 5) {
			return fail(400, { message, longer: true})
		}
		
		
		// get the slug (should be simpler but for now)
		const chat = await db.chats.findUnique({
			where: { slug: params.slug}
		})
		let number = 0
		if (chat !== null) {
			number = chat.content.length + 1
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
		number += 1
		interface Item {
			mode: Writable<number>
			version: Writable<string>
			recourcelink: Writable<boolean>
			text: string
		}

		const requestBody: Item = { mode: setMode, version: setVersion, recourcelink: recourceLink,  text: message }
		
		const response = await fetch('http://127.0.0.1:8000/request/',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody)
		})
		const data = await response.json();

		// create KI answer db entry

		await db.chats.update({
			where:{
				slug: params.slug
			},
			data:{
				content:{
					push:{
						id: String(number),
						state: false,
						text: data.text
					}
				}
			}
		})
		
		return { success: true }
	}
}



