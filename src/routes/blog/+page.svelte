<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import { siteTitle } from '$lib/config';
	import { siteDescription } from '$lib/config';
	import { currentPagePath } from '$lib/assets/js/store';

	export let data;

	currentPagePath.set('/blog');

	let items = data.posts;
	let currentPage = 1;
	let pageSize = 8;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
	<title>記事一覧 | {siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1>記事一覧</h1>

<PostsList posts={paginatedItems} />

<div id="pagination-nav">
	<LightPaginationNav
		totalItems={items.length}
		{pageSize}
		{currentPage}
		limit={1}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
</div>

<style>
	#pagination-nav :global(.pagination-nav) {
		box-shadow: none;
	}
</style>
