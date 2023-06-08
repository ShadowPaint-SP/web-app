import { error, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { PrismaClient } from "@prisma/client";
const db = new PrismaClient()

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

// here we get the existing content of the chat ( we populate it )

export const actions: Actions = {
	addMessage: async ({ request }) => {
		const formData = await request.formData()
		const message = String(formData.get('messagesend'))

		if(!message){
			return fail(400, { message, missing: true })
		}

		//here i create the database entry and also make the api request


		return { success: true }
	}
}