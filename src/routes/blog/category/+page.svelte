<script>
	export let data
  const { uniqueCategories } = data
</script>


<svelte:head>
	<title>カテゴリ一覧</title>
</svelte:head>


<div class="compressed-content">
	<h1 class="h2">カテゴリ一覧</h1>

	<ul>
		{#each uniqueCategories as category}
		<li>
			<a href="/blog/category/{category.title}">
				{ category.title }
			</a>
			({category.count})
		</li>
		{/each}
	</ul>
</div>
