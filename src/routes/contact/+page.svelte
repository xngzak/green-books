<script>
	import { siteTitle } from '$lib/config';
	import { currentPagePath } from '$lib/assets/js/store';
	currentPagePath.set('/contact');
</script>

<svelte:head>
	<title>Contact │ {siteTitle}</title>
</svelte:head>

<h1>Contact</h1>
