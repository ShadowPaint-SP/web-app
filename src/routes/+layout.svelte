<script lang="ts">
	import { page } from '$app/stores'
	import type { LayoutData } from './$types'
	import '../app.postcss'
	import { onMount } from 'svelte'
	import { setMode, setVersion, recourceLink } from './store'

	export let data: LayoutData
	let selected = 'settings'

	let isdarkmode = false
	function toggleDarkMode() {
		isdarkmode = !isdarkmode

		const htmlElement = document.documentElement
		const currentTheme = htmlElement.getAttribute('data-theme')
		const newTheme = currentTheme === 'light' ? 'dark' : 'light'

		htmlElement.setAttribute('data-theme', newTheme)
		localStorage.setItem('theme', newTheme)

		localStorage.setItem('isdarkmode', isdarkmode.toString())
	}

	function handleVersionChange(event: any) {
		$setVersion = event.target.value
	}

	// load session data (if page is reloaded or opened again)
	onMount(() => {
		const savedTheme = localStorage.getItem('theme') || 'light'
		document.documentElement.setAttribute('data-theme', savedTheme)

		const savedisdarkmode = localStorage.getItem('isdarkmode')
		isdarkmode = savedisdarkmode === 'true'
	})
</script>

<svelte:head>
	<title>{$page.data.chat?.title}</title>
</svelte:head>

<div class="h-screen flex flex-row">
	<aside class="h-screen border-r-2 border-base-300 flex">
		<div class="w-[500px] px-8 flex flex-grow flex-col overflow-y-auto" data-simplebar>
			{#if selected == 'settings'}
				<div class="flex-grow">
					<div class="sticky top-0 py-4 bg-base-100">
						<h2 class="m-0">Settings</h2>
					</div>
					<div class="pt-8">
						<button
							class="border border-base-300 rounded-xl mb-4 flex flex-row cursor-pointer text-left"
							on:click={() => ($setMode = 1)}
						>
							<div class="p-3">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-8 w-8 stroke-base-300 ${$setMode === 1 ? 'hidden' : ''}`}
								>
									<circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-dasharray="3 3" />
								</svg>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-8 w-8 stroke-base-100 ${$setMode === 1 ? '' : 'hidden'}`}
								>
									<circle
										cx="12"
										cy="12"
										r="8"
										fill="#636363"
										stroke="#636363"
										stroke-linecap="round"
									/>
									<path
										d="M10.488 15.6a.628.628 0 0 1-.469-.21l-2.64-2.728a.653.653 0 0 1-.18-.493.706.706 0 0 1 .196-.492.625.625 0 0 1 .468-.194.63.63 0 0 1 .47.194l2.186 2.26 5.171-5.343a.616.616 0 0 1 .46-.194c.183 0 .337.064.462.194a.658.658 0 0 1 .187.476.659.659 0 0 1-.187.476l-5.655 5.844a.628.628 0 0 1-.469.21Z"
										fill="#fff"
									/>
								</svg>
							</div>
							<div class="p-3 pl-0">
								<p class="m-0 font-bold">lorem mode 1</p>
								<p class="m-0 text-neutral-400">
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
									tempor invidunt ut labore et dolore magna aliquyam
								</p>
							</div>
						</button>
						<button
							class="border border-base-300 rounded-xl mb-4 flex flex-row cursor-pointer text-left"
							on:click={() => ($setMode = 2)}
						>
							<div class="p-3">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-8 w-8 stroke-base-300 ${$setMode === 2 ? 'hidden' : ''}`}
								>
									<circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-dasharray="3 3" />
								</svg>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-8 w-8 stroke-base-100 ${$setMode === 2 ? '' : 'hidden'}`}
								>
									<circle
										cx="12"
										cy="12"
										r="8"
										fill="#636363"
										stroke="#636363"
										stroke-linecap="round"
									/>
									<path
										d="M10.488 15.6a.628.628 0 0 1-.469-.21l-2.64-2.728a.653.653 0 0 1-.18-.493.706.706 0 0 1 .196-.492.625.625 0 0 1 .468-.194.63.63 0 0 1 .47.194l2.186 2.26 5.171-5.343a.616.616 0 0 1 .46-.194c.183 0 .337.064.462.194a.658.658 0 0 1 .187.476.659.659 0 0 1-.187.476l-5.655 5.844a.628.628 0 0 1-.469.21Z"
										fill="#fff"
									/>
								</svg>
							</div>
							<div class="p-3 pl-0">
								<p class="m-0 font-bold">lorem mode 2</p>
								<p class="m-0 text-neutral-400">
									Ut fermentum sed arcu ut suscipit. Morbi quis ante id odio ultrices varius. Etiam
									ac lacus quam. Pellentesque quis sem.
								</p>
							</div>
						</button>

						<button
							class="border border-base-300 rounded-xl mb-4 flex flex-row cursor-pointer text-left"
							on:click={() => ($setMode = 3)}
						>
							<div class="p-3">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-8 w-8 stroke-base-300 ${$setMode === 3 ? 'hidden' : ''}`}
								>
									<circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-dasharray="3 3" />
								</svg>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-8 w-8 stroke-base-100 ${$setMode === 3 ? '' : 'hidden'}`}
								>
									<circle
										cx="12"
										cy="12"
										r="8"
										fill="#636363"
										stroke="#636363"
										stroke-linecap="round"
									/>
									<path
										d="M10.488 15.6a.628.628 0 0 1-.469-.21l-2.64-2.728a.653.653 0 0 1-.18-.493.706.706 0 0 1 .196-.492.625.625 0 0 1 .468-.194.63.63 0 0 1 .47.194l2.186 2.26 5.171-5.343a.616.616 0 0 1 .46-.194c.183 0 .337.064.462.194a.658.658 0 0 1 .187.476.659.659 0 0 1-.187.476l-5.655 5.844a.628.628 0 0 1-.469.21Z"
										fill="#fff"
									/>
								</svg>
							</div>
							<div class="p-3 pl-0">
								<p class="m-0 font-bold">lorem mode 3</p>
								<p class="m-0 text-neutral-400">
									Sed nec purus sed dui pretium rhoncus eu a lorem. Vivamus non dui arcu. Curabitur
									faucibus tellus eget aliquam accumsan.
								</p>
							</div>
						</button>

						<select
							class="select border border-base-300 w-full focus:outline-none mb-4 font-bold"
							bind:value={$setVersion}
							on:change={handleVersionChange}
						>
							<option value="1">Version 1</option>
							<option value="2">Version 2</option>
							<option value="3">Version 3</option>
						</select>

						<button
							class="mb-4 flex flex-row w-full cursor-pointer text-left"
							on:click={() => ($recourceLink = !$recourceLink)}
						>
							<div class="pt-1">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-7 w-7 stroke-base-300 ${$recourceLink ? 'hidden' : ''}`}
								>
									<circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-dasharray="3 3" />
								</svg>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-7 w-7 stroke-base-100 ${$recourceLink ? '' : 'hidden'}`}
								>
									<circle
										cx="12"
										cy="12"
										r="8"
										fill="#636363"
										stroke="#636363"
										stroke-linecap="round"
									/>
									<path
										d="M10.488 15.6a.628.628 0 0 1-.469-.21l-2.64-2.728a.653.653 0 0 1-.18-.493.706.706 0 0 1 .196-.492.625.625 0 0 1 .468-.194.63.63 0 0 1 .47.194l2.186 2.26 5.171-5.343a.616.616 0 0 1 .46-.194c.183 0 .337.064.462.194a.658.658 0 0 1 .187.476.659.659 0 0 1-.187.476l-5.655 5.844a.628.628 0 0 1-.469.21Z"
										fill="#fff"
									/>
								</svg>
							</div>
							<div class="pl-2 pt-0.5">
								<p class="m-0 font-bold">Show recource-link</p>
							</div>
						</button>

						<button
							class="mb-4 flex flex-row w-full cursor-pointer text-left"
							on:click={toggleDarkMode}
						>
							<div class="pt-1">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-7 w-7 stroke-base-300 ${isdarkmode ? 'hidden' : ''}`}
								>
									<circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-dasharray="3 3" />
								</svg>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke="currentcolor"
									fill="none"
									class={`ml-1 h-7 w-7 stroke-base-100 ${isdarkmode ? '' : 'hidden'}`}
								>
									<circle
										cx="12"
										cy="12"
										r="8"
										fill="#636363"
										stroke="#636363"
										stroke-linecap="round"
									/>
									<path
										d="M10.488 15.6a.628.628 0 0 1-.469-.21l-2.64-2.728a.653.653 0 0 1-.18-.493.706.706 0 0 1 .196-.492.625.625 0 0 1 .468-.194.63.63 0 0 1 .47.194l2.186 2.26 5.171-5.343a.616.616 0 0 1 .46-.194c.183 0 .337.064.462.194a.658.658 0 0 1 .187.476.659.659 0 0 1-.187.476l-5.655 5.844a.628.628 0 0 1-.469.21Z"
										fill="#fff"
									/>
								</svg>
							</div>
							<div class="pl-2 pt-0.5">
								<p class="m-0 font-bold">Dark mode</p>
							</div>
						</button>
					</div>
				</div>
			{:else}
				<div>
					<div class="sticky top-0 py-4 bg-base-100">
						<h2 class="m-0">History</h2>
					</div>
					<nav class="pt-4 not-prose">
						<ul>
							{#each data.chats as { slug, title }}
								<a href="/chat/{slug}" tabindex="-1">
									<p
										class="p-4 mt-4 text-center border border-base-300 rounded-lg active:scale-95 cursor-pointer hover:border-neutral-400"
									>
										{title}
									</p>
								</a>
							{/each}
						</ul>
					</nav>
				</div>
				<div class="sticky bottom-[74px] max-h-max w-full not-prose mt-auto flex-shrink-0">
					<div class="h-20 bg-gradient-to-t from-base-100 to-transparent" />
					<div class="pb-4 bg-base-100">
						<a
							href="/chat"
							class="flex flex-row p-2 pl-4 text-center border border-base-300 rounded-lg active:scale-95 cursor-pointer hover:border-neutral-400 items-center"
						>
							<svg
								stroke="currentColor"
								fill="none"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-4 w-4 mt-[2px]"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
								><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg
							>

							New Chat
						</a>
					</div>
				</div>
			{/if}
			<div class="sticky bottom-0 max-h-max w-full bg-base-100">
				<div class="w-full inline-flex items-center border border-base-300 rounded-xl p-1 mb-8">
					<label
						for="history"
						class={`${
							selected === 'history' ? 'bg-black text-base-100' : ''
						} text-center flex-grow border-r border-base-100 pb-1 mr-2 rounded-lg cursor-pointer`}
					>
						<input
							type="radio"
							name="switch"
							id="history"
							value="history"
							bind:group={selected}
							class="hidden"
						/>
						History
					</label>
					<label
						for="settings"
						class={`${
							selected === 'settings' ? 'bg-black text-base-100' : ''
						} text-center flex-grow border-l border-base-100 pb-1 rounded-lg cursor-pointer`}
					>
						<input
							type="radio"
							name="switch"
							id="settings"
							value="settings"
							bind:group={selected}
							class="hidden"
						/>
						Settings
					</label>
				</div>
			</div>
		</div>
	</aside>

	<div class="w-full flex flex-col">
		<header class="p-4 items-center flex flex-row border-b-2 border-base-300">
			<div>
				<h2 class="m-0"><a class="font-bold" href="/">Vanguard</a></h2>
			</div>
			<span class="ml-2 badge badge-lg badge-error">DEMO</span>

			<nav class="items-center w-full flex justify-end">
				<!--<div class="ml-3 grid grid-flow-col items-center">
					<a class="text-orange-400" href="/subscribe">Subscribe</a>
					<svg
						stroke="currentcolor"
						fill="none"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						aria-hidden="true"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="ml-1 h-5 w-5 stroke-orange-400"
						><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg
					>
				</div>-->

				<!--<div class="ml-3">
					<a href="/about">about</a>
				</div>-->

				<div class="ml-3 avatar placeholder">
					<div class="bg-neutral-focus text-neutral-content rounded-lg w-8">
						<span class=" text-sm">MX</span>
					</div>
					<span class="ml-1">username</span>
				</div>
			</nav>
		</header>
		<main class="p-4 pb-0 flex-grow overflow-y-scroll">
			<div class="h-full">
				<slot />
			</div>
		</main>
	</div>
</div>

<style>
	a {
		text-decoration-line: none;
	}
</style>
