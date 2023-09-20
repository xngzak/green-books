<script>
	import { siteTitle, siteDescription } from '$lib/config';
	import { currentPagePath } from '$lib/assets/js/store';

	import Hero from '$lib/components/Hero.svelte';
	import Works from '$lib/components/Works.svelte';

	currentPagePath.set('/');
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<Hero />

<h1 id="scrolled" style="margin-top:30px;">Products</h1>

<Works />