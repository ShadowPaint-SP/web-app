import type { LayoutServerLoad } from "./$types";

import { PrismaClient } from "@prisma/client";
const db = new PrismaClient()

export const load: LayoutServerLoad = async (event) => {
	const chats = await db.chats.findMany({
		select:{
			title: true,
			slug: true
		}
	})
	return { chats }

}