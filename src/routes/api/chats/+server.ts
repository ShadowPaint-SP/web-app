import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();


export const GET: RequestHandler = async ({ url }) => {
	const limit = url.searchParams.get('limit') ?? 30
	const order = url.searchParams.get('order') ?? 'asc'
	const chats = await db.chats.findMany({
	//	orderBy: { id: order},
	//	take: limit
	})
	return json(chats)
};