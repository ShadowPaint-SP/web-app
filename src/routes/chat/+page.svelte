<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import type { ActionData, SubmitFunction } from './$types'
	import send from '$lib/svg/send.svg'

	export let form: ActionData

	const create: SubmitFunction = () => {
		return async ({ result }) => {
			await applyAction(result)
		}
	}
</script>

<svelte:head>
	<title>Chat</title>
</svelte:head>
<div class=" pt-[35vh]">
	<!--<pre>
		{JSON.stringify(form, null, 2)}
	</pre>-->
	<h1 class="text-center">Create a new Chat</h1>

	<!--action="?/addMessage"-->
	<form
		method="POST"
		use:enhance={create}
		class="flex flex-row border border-base-200 rounded-lg shadow-md items-center hover:border-neutral-400"
	>
		<input
			tabindex="0"
			autocomplete="off"
			type="text"
			name="chatname"
			placeholder="Give the chat a name."
			class="text flex-grow resize-none h-7 min-h-full focus:outline-none pl-4"
		/><button type="submit" class=" flex items-center active:scale-90 py-2 px-5">
			<img src={send} alt="send" class="my-2" />
		</button>
	</form>

	{#if form?.errors}<div class="flex justify-center">
			<div class="alert alert-error mt-5 max-w-max animate-pulse">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>{form?.errors}</span>
			</div>
		</div>
	{/if}
</div>
