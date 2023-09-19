<script>
	import { navItems } from '$lib/config';
	import { Modal, Anchor, Group } from '@svelteuidev/core';
	import { HamburgerMenu } from 'radix-icons-svelte';

	let opened = false;

	function openModal() {
		opened = true;
	}
	function closeModal() {
		opened = false;
	}
</script>

<div on:click={openModal} on:keydown={openModal}>
	<HamburgerMenu size={30} />
</div>

<Modal
	{opened}
	on:close={closeModal}
	centered
	overlayOpacity={0.55}
	overlayBlur={3}
	withCloseButton={false}
>
	<Group position="center" direction="column" spacing="xl">
		{#each navItems as { href, name }}
			<a {href} on:click={closeModal}>{name}</a>
		{/each}
	</Group>
</Modal>

<style>
	a {
		text-decoration: none;
	}
</style>
