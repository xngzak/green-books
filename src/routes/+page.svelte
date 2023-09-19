<script>
	import { onMount } from 'svelte';
	import { siteTitle, siteDescription } from '$lib/config';
	import { currentPagePath } from '$lib/assets/js/store';
	import viewport from '$lib/assets/js/useViewportAction';

	import Hero from '$lib/components/Hero.svelte';
	import Works from '$lib/components/Works.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import PopularPosts from '$lib/components/PopularPosts.svelte';

	import { Button, Group } from '@svelteuidev/core';
	import { InstagramLogo } from 'radix-icons-svelte';
	currentPagePath.set('/');

	let visibleProfile = false;
	export let data; // ブログデータ受け取り

	console.log(data.posts)
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<Hero />

<!-- 人気記事 -->

<h1>Posts</h1>

<PopularPosts posts={data.posts}/>

<Group position="center" mt={10}>
	<Button variant="default" href="https://xiang.jp/blog">
		もっと見る
	</Button>
</Group>

<!-- イラスト・作品 -->

<h1 id="scrolled" style="margin-top:30px;">Works</h1>

<Works />

<Group position="center" mt={10}>
	<Button variant="default" href="https://www.instagram.com/xngzak/">
		<InstagramLogo slot="leftIcon" />
			もっと見る
	</Button>
</Group>

<!-- プロフィール -->

<h1>Profile</h1>

<div style="min-height:200px" use:viewport on:enterViewport|once={() => (visibleProfile = true)}>
	{#if visibleProfile}
		<Profile />
	{/if}
</div>

<!-- プロジェクト -->

<h1>Projects</h1>

<Projects />
