<script>
	import { navItems } from '$lib/config';
	import { currentPagePath } from '$lib/assets/js/store';
	import OffNav from '$lib/components/OffNav.svelte';
	let y;
	let currentPagePathValue;
	currentPagePath.subscribe((value) => {
		currentPagePathValue = value;
	});
</script>

<header class="header {y > 100 ? 'scrolled' : ''}">
	<!--ロゴ-->
	<a href="/" alt="back to home">
		<img class="header_logo {y > 100 ? 'scrolled' : ''}" src="/header.png" alt="header logo" />
	</a>
	<!--グローバルナビ-->
	<nav>
		<ul class="header_navi">
			{#each navItems as { href, name }}
				<li class:active={currentPagePathValue === href} class="header_navi_item">
					<a {href} class="header_navi_item_link">{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="small_navi">
		<OffNav />
	</div>
</header>

<svelte:window bind:scrollY={y} />

<style>
	.header {
		width: calc(100% - 2rem);
		padding: 0 1rem;
		max-width: 800px;
		height: 6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		background: rgba(255, 255, 255, 0.95);
		transition: 0.3s;
		z-index: 100;
	}

	.header.scrolled {
		height: 4rem;
	}
	.header_logo {
		display: block;
		height: 60px;
		width: 200px;
		transition: 0.3s;
	}
	.header_logo.scrolled {
		height: 48px;
		width: 160px;
	}

	ul,
	li {
		margin: 0;
		list-style: none;
	}
	.header_navi {
		display: flex;
	}
	.header_navi_item {
		font-size: 1rem;
		position: relative;
		height: 2.5rem;
		margin: 0;
		border-bottom: solid 2px #eee;
	}
	.header_navi_item:hover,
	.header_navi_item.active {
		border-bottom: solid 2px var(--accent);
	}
	.header_navi_item_link {
		display: block;
		font-size: 0.9rem;
		color: var(--black);
		text-decoration: none;
		padding: 0.6rem 0.8rem;
		white-space: nowrap;
	}
	.header_navi_item_link:hover {
		color: #999;
	}
	@media screen and (max-width: 808px) {
		.header_navi {
			display: none;
		}
	}
	.small_navi {
		display: none;
		width: 2rem;
		height: 2rem;
		margin: 1rem;
	}
	@media screen and (max-width: 808px) {
		.small_navi {
			display: block;
		}
	}
</style>
