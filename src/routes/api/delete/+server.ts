import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

type Data = {
	success: boolean
	errors: Record<string, string>
}
export const DELETE: RequestHandler = async ({ request }) => {
	 const formData = await request.formData()
	 const item = String(formData.get('slug'))
	
	 const data: Data = {
		success: false,
		errors: {}
	 }

	 if (!item) {
		data.errors.slug = 'required'
		return json(data, { status: 400 })
	 }

	 // remove chat with slug
	 await db.chats.delete({
		where: {
			slug: item
		}
	 })

	 data.success = true
	 return json(data)
};

