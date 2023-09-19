<script>
	export let data;
	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	import { onMount } from 'svelte';
	import { currentPagePath } from '$lib/assets/js/store';
	currentPagePath.set('/blog');

	import { Button } from '@svelteuidev/core';

	// H2, H3に目次から飛べるようにidを付ける
	let PostContent;
	onMount(() => {
		const stringToHTML = function (str) {
			var dom = document.createElement('div');
			dom.innerHTML = str;
			return dom;
		};
		const res = stringToHTML(data.PostContent);
		const h2h3Elements = res.querySelectorAll('h2, h3');
		for (const e of h2h3Elements) {
			const text = e.textContent.toLowerCase();
			e.setAttribute('id', text);
		}
		PostContent.append(res);
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
</svelte:head>

<article class="post">
	<img
		class="cover-image"
		src={coverImage}
		alt="post cover"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{title}</h1>

	<div class="meta">
		<img class="pencil_icon" src="/icons/pencil.svg" alt="pencil icon" />
		{date}
		{#if categories}
			<ul class="categoryList">
				{#each categories as category}
					<li>
						<Button color="yellow" size="xs" compact href="/blog/category/{category}">
							{category}
						</Button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<div bind:this={PostContent} />
</article>

<style>
	.cover-image {
		width: 100%;
		height: auto;
	}
	.meta {
		display: flex;
		align-items: center;
		margin: 2rem 0;
	}
	.pencil_icon {
		width: 1rem;
		margin: 0 0.2rem 0.1rem 0;
	}
	.categoryList {
		display: flex;
		margin: 0;
	}
	.categoryList li {
		margin: 0.4rem;
	}
</style>
