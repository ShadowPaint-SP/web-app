<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import type { ActionData, SubmitFunction } from './$types'

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
<div class="h-full">
	<pre>
		{JSON.stringify(form, null, 2)}
	</pre>
	<h1 class=" text-center">Create a new Chat</h1>

	<!--action="?/addMessage"-->
	<form
		method="POST"
		use:enhance={create}
		class="flex flex-row border border-base-200 rounded-lg shadow-md items-center hover:border-neutral-400"
	>
		<input
			tabindex="0"
			type="text"
			name="chatname"
			placeholder="Give the chat a name."
			class="text flex-grow resize-none h-7 min-h-full focus:outline-none pl-4"
		/><button>ex</button>
	</form>
</div>
