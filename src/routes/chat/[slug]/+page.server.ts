import { error } from "@sveltejs/kit";
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