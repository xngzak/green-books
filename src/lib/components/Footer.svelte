<script>
	import { siteTitle } from '$lib/config';
</script>

<footer>
	<p>
		<a href="/">ホーム</a> │
		<a href="/blog">記事一覧</a> │
		<a href="/about">プロフィール</a> │
		<a href="/contact">お問い合わせ</a>
		<!-- │<a href="#">プライバシーポリシー</a>-->
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
