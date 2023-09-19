<script>
	import TypeWriter from '$lib/components/TypeWriter.svelte';
</script>

<div class="hero">
	<img
		src="./hero.webp"
		alt="hero"
		style="width: 512px; max-width: 100%; aspect-ratio: 512 / 437;"
	/>
	<TypeWriter />
</div>
<div class="hero_scrollIcon_area">
	<a href="#scrolled" class="js-smooth-scroll">
		<img src="/icons/down.svg" alt="scroll to works" style="width: 2rem; height:2rem;" />
	</a>
</div>

<style>
	.hero {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		flex-direction: row-reverse;
		align-content: space-around;
	}
	.hero_scrollIcon_area {
		text-align: center;
		height: 2rem;
	}
</style>
