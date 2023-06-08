<!--<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import send from '$lib/svg/send.svg'

	type Data = {
		sucess: boolean
		errors: Record<string, string>
	}

	let form: Data

	async function addMessage(event: Event) {
		const formEl = event.target as HTMLFormElement
		const data = new FormData(formEl) // input text

		console.log(data)

		const response = await fetch(formEl.action, {
			method: 'POST',
			body: data
		})

		const responsedata = await response.json()
		console.log('responsedata :>> ', responsedata)

		form = responsedata
		formEl.reset()

		await invalidateAll()
	}
</script>

<div class=" flex flex-col h-full">
	<div class="flex flex-grow justify-around">
		<div class="w-[768px] lg:max-w-3xl md:max-w-2xl grid content-between grid-flow-row-dense">
			<div>
				<slot />
			</div>

			<div class="sticky bottom-0 max-h-max">
				<div class="w-full">
					<div class="h-20 bg-gradient-to-t from-base-100 to-transparent" />
					<div class="pb-8 bg-base-100">
						<form
							on:submit|preventDefault={addMessage}
							method="POST"
							class="flex flex-row border border-base-200 rounded-lg shadow-md items-center hover:border-neutral-400"
						>
							<input
								tabindex="0"
								type="text"
								name="messagesend"
								placeholder="Send a message."
								class="text flex-grow resize-none h-7 min-h-full focus:outline-none pl-4"
							/>

							<button type="submit" class=" flex items-center active:scale-90 py-2 px-4">
								<img src={send} alt="send" class="my-2" />
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>-->

<slot />
