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
						width="49"
						height="48"
						viewBox="0 0 49 49"
						stroke="currentcolor"
						fill="none"
						class="ml-1 h-9 w-9"
						><rect x=".667" width="48" height="48" rx="24" fill="#F8F8F8" stroke="none" /><path
							d="M25.618 14.927c-.3-.92-1.602-.92-1.902 0l-1.52 4.674a1 1 0 0 1-.95.69h-4.914c-.968 0-1.372 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.674c-.3.921.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0L29.23 31.9c.783.57 1.838-.196 1.538-1.118l-1.518-4.674a1 1 0 0 1 .363-1.118l3.976-2.888c.783-.57.38-1.81-.588-1.81h-4.915a1 1 0 0 1-.95-.69l-1.52-4.674Z"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<!--<svg
						stroke="currentColor"
						fill="none"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						aria-hidden="true"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-6 w-6"
						><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg
					>-->
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
						width="49"
						height="48"
						viewBox="0 0 49 48"
						stroke="currentcolor"
						fill="none"
						class="ml-1 h-9 w-9"
					>
						<rect x=".333" width="48" height="48" rx="24" fill="#F8F8F8" stroke="none" />
						<path
							d="M24.333 21v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3l-6.928-12c-.77-1.333-2.694-1.333-3.464 0l-6.928 12c-.77 1.333.192 3 1.732 3Z"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<!--<svg
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
					>-->
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
					width="48"
					height="48"
					viewBox="0 0 48 48"
					stroke="currentcolor"
					fill="currentcolor"
					class="ml-1 h-9 w-9"
				>
					<rect width="48" height="48" rx="24" fill="#F8F8F8" stroke="none" />
					<path
						d="M17 15v4-4Zm-2 2h4-4Zm3 12v4-4Zm-2 2h4-4Zm9-16 2.286 6.857L33 24l-5.714 2.143L25 33l-2.286-6.857L17 24l5.714-2.143L25 15Z"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<!--<svg
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
				>-->

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
