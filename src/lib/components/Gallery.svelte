<script>
	import { onMount, tick } from 'svelte';
	import { Modal } from '@svelteuidev/core';
	import ImageLoader from '$lib/components/ImageLoader.svelte';

	export let gap = 10;
	export let maxColumnWidth = 200;
	export let images = [];

	let columns = [];
	let galleryWidth = 0;
	let columnCount = 0;

	// 横幅から列数を計算する
	$: columnCount = parseInt(galleryWidth / maxColumnWidth) || 1;
	$: columnCount && Draw();
	$: galleryStyle = `grid-template-columns: repeat(${columnCount}, 1fr); --gap: ${gap}px`;

	onMount(Draw);

	async function Draw() {
		await tick();
		columns = [];
		// 列ごとに画像を差し込む
		for (let i = 0; i < images.length; i++) {
			const idx = i % columnCount;
			columns[idx] = [
				...(columns[idx] || []),
				{ src: images[i].src, alt: images[i].src.split('.')[0], text: images[i].text }
			];
		}
	}

	// クリックされたら
	let imgSrc;
	let imgAlt;
	let imgText;
	let opened = false;

	function openModal(e) {
		imgSrc = e.detail.src;
		imgAlt = e.detail.alt;
		imgText = e.detail.text;
		opened = true;
	}
	function closeModal(e) {
		opened = false;
	}
</script>

<div id="gallery" bind:clientWidth={galleryWidth} style={galleryStyle}>
	{#each columns as column}
		<div class="column">
			{#each column as img}
				<ImageLoader
					src="https://xiang.jp/works/{img.src}"
					alt={img.alt}
					text={img.text}
					on:click={openModal}
				/>
			{/each}
		</div>
	{/each}
</div>

<Modal
	{opened}
	on:close={closeModal}
	centered
	overlayOpacity={0.55}
	overlayBlur={3}
	withCloseButton={false}
	size="min(100vw - 20px, 500px)"
>
	<img class="modalImage" src={imgSrc} alt={imgAlt} />
	{#if imgText}
		<p class="modalText">{@html imgText}</p>
	{/if}
</Modal>

<style>
	#gallery {
		width: 100%;
		display: grid;
		gap: var(--gap);
	}
	#gallery .column {
		gap: var(--gap);
		display: flex;
		flex-direction: column;
	}
	#gallery .column * {
		width: 100%;
		margin-top: var(--gap);
	}
	#gallery .column *:nth-child(1) {
		margin-top: 0;
	}
	.modalImage {
		width: 100%;
	}
	.modalText {
		text-align: center;
		margin: 1rem 0 0 0;
	}
</style>
