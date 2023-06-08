<script lang="ts">
	import { page } from '$app/stores'
	import type { LayoutData } from './$types'
	import '../app.postcss'

	export let data: LayoutData
</script>

<svelte:head>
	<title>{$page.data.chat?.title}</title>
</svelte:head>

<div class="h-screen flex flex-row">
	<aside class="border-r-2 border-base-300">
		<div class="w-[260px] px-8 py-4 flex flex-col overflow-y-scroll min-h-full">
			<div class="self-start"><h2 class="m-0">History</h2></div>
			<nav class="pt-4 w-full not-prose">
				<ul>
					{#each data.chats as { slug, title }}
						<a href="/chat/{slug}">
							<p
								class="p-4 mt-4 text-center border border-base-300 rounded-lg active:scale-95 cursor-pointer hover:border-neutral-400"
							>
								{title}
							</p>
						</a>
					{/each}
				</ul>
			</nav>
			<div class="mt-auto w-full py-4 not-prose flex-shrink-0">
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
	</aside>
	<div class="w-full flex flex-col">
		<header class="p-4 items-center flex flex-row border-b-2 border-base-300">
			<div>
				<h2 class="m-0"><a class="font-bold" href="/">Vanguard</a></h2>
			</div>
			<div class="ml-3 text-green-500">favicon</div>

			<nav class="items-center w-full flex justify-end">
				<div class="ml-3 grid grid-flow-col items-center">
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
				</div>

				<div class="ml-3"><a href="/settings">settings</a></div>

				<div class="ml-3">
					<a href="/about">about</a>
				</div>

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
