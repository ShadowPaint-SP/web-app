<script lang="ts">
	import Textarea from './Textarea.svelte'
</script>

<div class=" flex flex-col h-full">
	<div class="flex flex-grow justify-around">
		<div class="w-3/4 grid content-between grid-flow-row-dense">
			<div>
				<slot />
			</div>

			<div class="sticky bottom-0 max-h-max">
				<Textarea />
			</div>
		</div>
	</div>
</div>
