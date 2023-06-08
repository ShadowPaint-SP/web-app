<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(date)
	}
</script>

<div id="conversation">
	<hgroup>
		<h1>{data.chat.title}</h1>
		<h2>{formatDate(data.chat.createdAt)}</h2>
	</hgroup>

	<div class="flex flex-col">
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
