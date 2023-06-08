<script lang="ts">
	import send from '$lib/svg/send.svg'
	import trash from '$lib/svg/trash.svg'

	import { clearTextarea, handleSearch } from './Textarea'

	let textarea: HTMLTextAreaElement

	function checkKeyPress(event: KeyboardEvent) {
		if (event.key == 'Enter') {
			handleSearch(textarea)
		}
	}
</script>

<div class="w-full">
	<div class="h-20 bg-gradient-to-t from-base-100 to-transparent" />
	<form class="bg-base-100 pb-8">
		<div
			class="flex flex-row border border-base-200 rounded-lg shadow-md items-center hover:border-neutral-400"
		>
			<textarea
				bind:this={textarea}
				on:keydown={checkKeyPress}
				tabindex="0"
				placeholder="Send a message."
				class="bg-transparent text flex-grow resize-none h-7 min-h-full focus:outline-none pl-4"
			/>

			<button class="h-auto active:scale-90" on:click={() => clearTextarea(textarea)}>
				<img src={trash} alt="trash" class="my-2" />
			</button>

			<button
				class=" flex items-center active:scale-90 py-2 px-4"
				on:click={() => handleSearch(textarea)}
			>
				<img src={send} alt="send" class="my-2" />
			</button>
		</div>
	</form>
</div>
