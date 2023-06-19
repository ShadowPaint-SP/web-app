<script lang="ts">
	import type { ActionData, PageData, SubmitFunction } from './$types'

	export let data: PageData

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(date)
	}

	/////////////////////////////////////////////////

	import send from '$lib/svg/send.svg'
	import trash from '$lib/svg/trash.svg'
	import { enhance } from '$app/forms'

	export let form: ActionData
	let loading = false

	const addMessage: SubmitFunction = (input) => {
		// check if it is a link or a text
		loading = true
		return async ({ update }) => {
			//do something when it is submitted
			loading = false
			await update()
		}
	}
</script>

<!--<pre>
	{JSON.stringify(data, null, 2)}
</pre>-->
<div>
	<div>
		<hgroup>
			<h1>{data.chat.title}</h1>
			<h2>{formatDate(data.chat.createdAt)}</h2>
		</hgroup>

		<div id="conversation" class="flex flex-col">
			{#each data.chat.content as content}
				{#if content.state == true}
					<div id="question" class="flex flex-row justify-end text-neutral-400">
						<div class="text-end pr-2">
							<p>{formatDate(content.time)}</p>
							<span>{content.text}</span>
						</div>
						<div>
							<div class="avatar placeholder pt-5">
								<div class="bg-neutral-focus text-neutral-content rounded-lg w-8">
									<span class="text-sm">MX</span>
								</div>
							</div>
						</div>
					</div>
				{:else}
					<div id="answer" class="flex flex-row">
						<div>
							<div class="avatar placeholder pt-5">
								<div class="bg-neutral-focus text-neutral-content rounded-lg w-8">
									<span class="text-sm">VG</span>
								</div>
							</div>
						</div>
						<div class="pl-2">
							<p>{formatDate(content.time)}</p>
							<span>{content.text}</span>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<div class="sticky bottom-0 max-h-max">
	<div class="w-full">
		<div class="h-20 bg-gradient-to-t from-base-100 to-transparent" />
		<div class="pb-8 bg-base-100">
			<form
				method="POST"
				action="?/addMessage"
				use:enhance={addMessage}
				class="flex flex-row border border-base-200 rounded-lg shadow-md items-center hover:border-neutral-400"
			>
				<input
					tabindex="0"
					autocomplete="off"
					type="text"
					name="messagesend"
					disabled={loading}
					placeholder="Send a message."
					class="text flex-grow resize-none h-7 min-h-full focus:outline-none pl-4"
				/>
				{#if form?.missing}
					<span class="text-error">Please input text</span>
				{/if}
				{#if form?.longer}
					<span class="text-error">min. 5 Words</span>
				{/if}

				{#if loading}
					<div class="flex items-center py-2 px-2">
						<svg
							class="w-6 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-base-200"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
					</div>
				{:else}
					<button type="submit" class=" flex items-center active:scale-90 py-2 px-5">
						<img src={send} alt="send" class="my-2" />
					</button>
				{/if}
			</form>
		</div>
	</div>
</div>
