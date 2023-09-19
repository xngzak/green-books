<script>
	import { onMount, createEventDispatcher } from 'svelte';

	export let src;
	export let alt;
	export let text;

	let loaded = false;

	onMount(async () => {
		const img = new Image();
		img.src = src;
		img.alt = alt;
		img.onload = () => {
			loaded = true;
		};
	});

	// クリックされたら親コンポーネントに渡す
	const dispatch = createEventDispatcher();
	function HandleClick(e) {
		dispatch('click', { src: e.target.src, alt: e.target.alt, text: e.target.dataset.text });
	}
</script>

<div class="image-container">
	{#if loaded}
		<img
			{src}
			{alt}
			data-text={text}
			on:click={HandleClick}
			on:keypress={HandleClick}
			class="GalleryImage"
		/>
	{/if}
</div>

<style>
	.image-container {
		height: 220px;
		padding: 10px;
		border-radius: 8px;
		background-color: var(--svelteui-colors-gray100);
	}
	.GalleryImage {
		transition: 0.2s;
		border-radius: 8px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.GalleryImage:hover {
		opacity: 0.95;
		transform: scale(1.04);
	}
</style>
