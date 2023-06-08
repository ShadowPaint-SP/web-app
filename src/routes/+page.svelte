<svelte:head>
	<title>Homepage</title>
</svelte:head>
<div class="flex flex-grow justify-around">
	<div class="lg:max-w-3xl md:max-w-2xl grid content-between grid-flow-row-dense">
		<div class="text-center pt-72 mb-1">
			<h1>Start a new Conversation</h1>
		</div>
		<div class="grid grid-rows-4 grid-flow-col gap-2">
			<!--capabilities-->
			<div class="grid place-items-center">
				<div>
					<svg
						stroke="currentColor"
						fill="none"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						aria-hidden="true"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-6 w-6"
						><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg
					>
				</div>

				<h3 class=" mt-3">Capabitities</h3>
			</div>
			<div class="p-2 text-center border border-base-300 rounded-lg">
				<span>Allows users to analyse and statement.</span>
			</div>
			<div class="p-2 text-center border border-base-300 rounded-lg">
				<span>Is capable to accept links to Twitter posts.</span>
			</div>
			<div class="p-2 text-center border border-base-300 rounded-lg">
				<span>place</span>
			</div>
			<!--limitations-->
			<div class="grid place-items-center">
				<div>
					<svg
						stroke="currentColor"
						fill="none"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-6 w-6"
						><path
							d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
						/><line x1="12" y1="9" x2="12" y2="13" /><line
							x1="12"
							y1="17"
							x2="12.01"
							y2="17"
						/></svg
					>
				</div>

				<h3 class=" mt-3">Limitations</h3>
			</div>
			<div class="p-2 text-center border border-base-300 rounded-lg">
				<span>English inputs are better because of translation stuff.</span>
			</div>
			<div class="p-2 text-center border border-base-300 rounded-lg">
				<span>At the moment links are limited to Twitter posts</span>
			</div>
			<div class="p-2 text-center border border-base-300 rounded-lg">
				<span>place</span>
			</div>
			<!--examples-->
			<div class="grid place-items-center">
				<svg
					stroke="currentColor"
					fill="none"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
					><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line
						x1="12"
						y1="21"
						x2="12"
						y2="23"
					/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
						x1="18.36"
						y1="18.36"
						x2="19.78"
						y2="19.78"
					/><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line
						x1="4.22"
						y1="19.78"
						x2="5.64"
						y2="18.36"
					/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
				>

				<h3 class=" mt-1">Examples</h3>
			</div>
			<div
				class="p-2 text-center border border-base-300 rounded-lg active:scale-95 cursor-pointer hover:border-neutral-400"
			>
				<span>"It is relly possible to fly when you drink enought Booze."</span>
			</div>
			<div
				class="p-2 text-center border border-base-300 rounded-lg active:scale-95 cursor-pointer hover:border-neutral-400"
			>
				<span>"the british queen is still alive. I saw her with my own eyes!"</span>
			</div>
			<div
				class="p-2 text-center border border-base-300 rounded-lg active:scale-95 cursor-pointer hover:border-neutral-400"
			>
				<span>"Nick Berck arbeitet an der IGS Kelsterbach."</span>
			</div>
		</div>
	</div>
</div>
