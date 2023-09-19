<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'

	export let data
</script>


<svelte:head>
	<title>カテゴリ: {data.category}</title>
</svelte:head>


<h1>カテゴリ: {data.category}</h1>

{#if data.posts.length}
	<PostsList posts={data.posts} />
{:else}
	<p>カテゴリー"{data.category}"の記事は見つかりませんでした。</p>

	<p><a href="/blog">記事一覧に戻る</a></p>
{/if}
