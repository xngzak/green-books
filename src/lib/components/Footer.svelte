<script>
	import { siteTitle } from '$lib/config';
</script>

<footer>
	<p>
		<a href="/">Home</a> │
		<a href="/product">Product</a> │
		<a href="/about">About</a> │
		<a href="/contact">Contact</a>
	</p>
	<p>&copy; 2021-{new Date().getFullYear()} {siteTitle}</p>
</footer>

<style>
	footer {
		padding: 1rem;
		font-size: 0.8rem;
		color: var(--ink);
		text-align: center;
	}
	p {
		margin: 0.3rem 0;
	}
</style>
