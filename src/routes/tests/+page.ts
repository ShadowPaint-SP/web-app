import type { Chats } from "@prisma/client";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch("/api/chats")
	const chats: Chats[] = await response.json()
	return { chats }
}