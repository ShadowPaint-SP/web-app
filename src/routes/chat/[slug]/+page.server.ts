import { error, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient()
import { API_URL } from "$env/static/private";

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

async function wordcount(str:string) {
	const count = str.split(' ')
	return count.length >= 5
}

// the real thing
export const actions: Actions = {
	addMessage: async ({ request, params, url }) => {
		const formData = await request.formData()
		const message = String(formData.get('messagesend'))
		const mode = Number(formData.get('mode'))
		const version = String(formData.get('version'))
		const link = Number(formData.get('link')) === 1
		// checks
		if(!message){
			return fail(400, { message, missing: true })
		}
		
		if (!await wordcount(message)) {
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
			mode: number
			version: string
			recourcelink: boolean
			text: string
		}

		const requestBody: Item = {mode: mode, version: version, recourcelink: link, text: message }

		console.log('requestBody :>> ', requestBody);

		const response = await fetch( API_URL+'test',{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody)
		})
		const data = await response.json();
		console.log('data :>> ', data);

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
