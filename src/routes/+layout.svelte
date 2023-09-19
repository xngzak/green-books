<script>
	import '$lib/assets/scss/global.scss';
	import { SvelteUIProvider } from '@svelteuidev/core';
	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
	import Content from '$lib/components/Content.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Analytics from '$lib/components/Analytics.svelte';

	export const prerender = true;
</script>

<SvelteUIProvider>
	<Container>
		<Header />
		<Analytics />
		<Content>
			<slot />
		</Content>
		<Footer />
	</Container>
</SvelteUIProvider>
