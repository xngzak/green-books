<script>
	import { currentPagePath } from '$lib/assets/js/store';
	currentPagePath.set("/about");

	import { Image, Center, Group, ActionIcon, Stack,Seo } from '@svelteuidev/core';
	import { TwitterLogo, GithubLogo, InstagramLogo } from 'radix-icons-svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>