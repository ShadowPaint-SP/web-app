import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

//api/test GET
export const GET: RequestHandler = async (event) => {
	//const options: ResponseInit = {
	//	status: 420,
	//	headers: {
	//		special: 'booze'
	//	}
	//}
	//return new Response("hello this is an api", options)
	const chats = await db.chats.findMany({
		take: Math.round(Math.random()*10)
	})
	event.setHeaders({
		'cache-Control': 'max-age=60' // sets a cachingtime  remove this so every time a request is made the content is loaded freshly
	})
	return json(chats)
}

//api/test POST
export const POST: RequestHandler = async (event) => {
	const data =await event.request.formData()
	const email = data.get('email')

console.log('email :>> ', email);
return new Response(
	JSON.stringify({ success: true}), {
		headers:{
			'content-Type': 'application/json'
		}
	}

	)
}