<script lang="ts">
	import type { PageData } from './$types'
	import type { Chats } from '@prisma/client'

	export let data: PageData

	$: ({ chats } = data) // makes the data reactive when something updates it updates

	async function getConvs() {
		const response = await fetch('api/chats')
		const posts: Chats[] = await response.json()
		return posts
	}
</script>

<h1>Chats</h1>

<p>Showing {chats.length} chats</p>

{#each chats as { slug, title }}
	<ul>
		<li>
			<a href="/chat/{slug}">{title}</a>
		</li>
	</ul>
{/each}

<h1>Homepage has to be updated to something else currently testing Ground 🧪</h1>

{#await getConvs()}
	<p>Loading...</p>
{:then posts}
	<pre>
		<p>Showing {posts.length} conversations</p>
		{#each posts as { slug, title }}
			<ul>
				<li>
					<a href="/chat/{slug}">{title}</a>
				</li>
			</ul>
		{/each}
	</pre>
{:catch error}
	<p>{error.message}</p>
{/await}
