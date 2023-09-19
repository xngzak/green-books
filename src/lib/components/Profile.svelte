<script>
	import { fly } from 'svelte/transition';
	import { Group, ActionIcon, Stack, Button } from '@svelteuidev/core';
	import { TwitterLogo, GithubLogo, InstagramLogo } from 'radix-icons-svelte';
</script>

<div transition:fly={{ x: 100, delay: 200 }}>
	<Group position="center" spacing="md">
		<div style="display: flex;">
			<Stack>
				<ActionIcon
					color="dark"
					size="md"
					root="a"
					alt="twitter link"
					href="https://twitter.com/xngzak"
					><TwitterLogo />
				</ActionIcon>
				<ActionIcon
					color="dark"
					size="md"
					root="a"
					alt="instagram link"
					href="https://www.instagram.com/xngzak/"><InstagramLogo /></ActionIcon
				>
				<ActionIcon
					color="dark"
					size="md"
					root="a"
					alt="github link"
					href="https://github.com/xngzak"><GithubLogo /></ActionIcon
				>
			</Stack>
			<img src="Nig.webp" style="width:200px; height:200px;" alt="xngzak icon" />
		</div>
		<div style="display: flex; text-align: center; flex-direction: column; align-items: center;">
			<p>駆け出しエンジニアのカイシャンです</p>
			<p>趣味でイラスト描いたりWEBサイト作ったりしてます</p>
			<p>文章書けるようになりたい</p>
			<Button variant="default" root="a" href="/about">詳しく</Button>
		</div>
	</Group>
</div>

<style>
	p {
		font-size: 0.9rem;
	}
</style>
