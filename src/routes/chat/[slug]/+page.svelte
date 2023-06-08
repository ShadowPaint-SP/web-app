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
	//async function addMessage(event: Event) {
	//	const formEl = event.target as HTMLFormElement
	//	formEl.reset()
	//}
</script>

<pre>
	{JSON.stringify(data, null, 2)}
</pre>
<div>
	<div>
		<hgroup>
			<h1>{data.chat.title}</h1>
			<h2>{formatDate(data.chat.createdAt)}</h2>
		</hgroup>

		<div id="conversation" class="flex flex-col">
			{#each data.chat.content as content}
				<div id="question" class="flex flex-row justify-end text-neutral-400">
					<div class="text-end pr-2">
						<p>{formatDate(content.questionTime)}</p>
						<span>{content.question}</span>
					</div>
					<div>
						<div class="avatar placeholder pt-5">
							<div class="bg-neutral-focus text-neutral-content rounded-lg w-8">
								<span class=" text-sm">MX</span>
							</div>
						</div>
					</div>
				</div>
				<div id="answer" class="flex flex-row">
					<div>
						<div class="avatar placeholder pt-5">
							<div class="bg-neutral-focus text-neutral-content rounded-lg w-8">
								<span class=" text-sm">VG</span>
							</div>
						</div>
					</div>
					<div class="pl-2">
						<p>{formatDate(content.answerTime)}</p>
						<span>{content.answer}</span>
					</div>
				</div>
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
					type="text"
					name="messagesend"
					placeholder="Send a message."
					class="text flex-grow resize-none h-7 min-h-full focus:outline-none pl-4"
				/>
				{#if form?.missing}
					<span class="text-error">Please input text</span>
				{/if}
				{#if form?.longer}
					<span class="text-error">min. 5 Words</span>
				{/if}

				<!--<button class="pl-2 h-auto active:scale-90 secondary" formaction="?/clearMessage">
								<img src={trash} alt="trash" class="my-2" />
							</button>-->
				<button type="submit" class=" flex items-center active:scale-90 py-2 px-4">
					<img src={send} alt="send" class="my-2" />
				</button>
			</form>
		</div>
	</div>
</div>
