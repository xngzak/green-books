<script>
	import Gallery from '$lib/components/Gallery.svelte';
	const images = [
		{ src: '1.png' },
		{ src: '2.png' },
		{ src: '3.png' },
	];
</script>

<Gallery gap="10" maxColumnWidth="200" {images} />
