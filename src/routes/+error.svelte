<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class=" text-center">
	<h1>boom 💥🥦</h1>

	<p>We have an error with something that should load here</p>
</div>
<div class=" flex justify-center">
	<pre class="w-1/2">
		{JSON.stringify($page, null, 2)}
	</pre>
</div>
