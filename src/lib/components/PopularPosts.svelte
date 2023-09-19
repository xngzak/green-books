<script>
	export let posts = [];
</script>

<ul class="popular-posts-list">
	{#each posts as post}
		{#if post.pageView>0}
		<li class="articleBox">
				<a href="/blog/{post.slug}">
					{#if post.coverImage}
						<img
							src={post.coverImage}
							alt=""
							width={post.coverWidth}
							height={post.coverHeight}
							style="ratio: {post.coverWidth} / {post.coverHeight}"
							class="coverImage"
						/>
					{:else}
						<img
							src="/static/images/default.png"
							alt=""
							width="16"
							height="9"
							style="ratio: 16 / 9"
							class="coverImage"
						/>
					{/if}
				</a>
				<article>
					<a href="/blog/{post.slug}">
						<div class="post-title">
							{post.title}
						</div>
					</a>
					<p>{post.excerpt}</p>
				</article>
			</li>
			{/if}
	{/each}
</ul>

<style>
	.posts-list {
		padding: 0;
	}
	.articleBox {
		margin: 1rem;
	}
	article {
		margin-left: 1rem;
	}
	article .post-title {
		font-size: 1.8rem;
		font-weight: bold;
		margin: 1rem;
	}
	article p {
		margin: 1rem;
	}
	.coverImage {
		width: 13rem;
		height: auto;
		border: solid 1px #999;
		border-radius: 4px;
	}
	.articleBox {
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	@media screen and (max-width: 648px) {
		.articleBox {
			flex-direction: column;
		}
		.coverImage {
			width: 100%;
			height: auto;
		}
		.articleBox {
			margin: 0;
		}
		article {
			margin-left: 0;
		}
	}
</style>
