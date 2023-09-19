<script>
	//import ogp from 'ogp-parser';
	export let href;
	export let title = 'タイトル';
	export let src = '/images/placeholde.webp';
	export let description = '';

	/*
	ogp(href, { skipOembed: true })
		.then(function (data) {
			title = data.title;
			src = data.ogp['og:image'][0];
			description = data.ogp['og:description'][0];
		})
		.catch(function (error) {
			console.error(error);
		});*/
</script>

<a {href}>
	<div
		style="overflow: hidden; width: 100%; display: table; border-radius: 8px; box-shadow: 0 2px 5px #ccc; height: 140px;"
	>
		<a
			{href}
			style="background-size: cover; background-image: url('{src}');
			display: table-cell; min-width: 180px; background-position: 50%;
			border-right: 1px solid #ccc;"
			target="_blank"
			rel="noreferrer"
		/>
		<a
			{href}
			style="display: table-cell; text-decoration: none; padding: 20px;"
			target="_blank"
			rel="noreferrer"
		>
			<strong
				style="
			display: -webkit-box;
			max-height: 24px;
			overflow: hidden;
			word-break: break-all;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;">{title}</strong
			>
			{#if description}
				<p
					style="
					display: -webkit-box;
					max-height: 3em;
					overflow: hidden;
					word-break: break-all;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;"
				>
					{description}
				</p>
			{/if}
			<p style="font-size: 0.8rem; color: #aaa">{href}</p>
		</a>
	</div>
</a>

<style>
</style>
