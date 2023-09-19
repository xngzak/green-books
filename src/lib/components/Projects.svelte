<script>
	import { fly } from 'svelte/transition';
	import { Button } from '@svelteuidev/core';
	import { ExternalLink } from 'radix-icons-svelte';

	import viewport from '$lib/assets/js/useViewportAction';

	const projectList = [
		{
			name: 'ワードヒッター',
			img: 'word-hitter.png',
			href: 'https://word-hitter.xiang.jp',
			txt: 'お題に当てはまる単語を当てるワードゲーム',
			visible: false
		},
		{
			name: 'ELEMENTS',
			img: 'ELEMENTS.webp',
			href: 'https://elements.xiang.jp',
			txt: '美しい周期表.クリックすると機械音声と共に詳細が表示されます',
			visible: false
		},
		{
			name: '初期アイコンメーカー',
			img: 'initial-icon-maker.png',
			href: 'https://icon-maker.xiang.jp',
			txt: 'TeamsやMicrosoftに使うアイコンを本家そっくりに自動生成するジェネレータ',
			visible: false
		},
		{
			name: 'Strangers',
			img: 'Strangers.webp',
			href: 'https://strangers.xiang.jp',
			txt: 'ブラウザで遊べるマルチプレイヤーゲーム',
			visible: false
		},
		{
			name: 'DRUGPEDIA',
			img: 'DRUGPEDIA.webp',
			href: 'https://drugpedia.xiang.jp',
			txt: '薬物の持つ共通の化学構造に着目して分類したサイト',
			visible: false
		},
		{
			name: 'クイズ勉強用bot',
			img: 'クイズ勉強用bot.webp',
			href: 'https://twitter.com/quiznotebot',
			txt: '早押しクイズ対策に関するツイートをするTwitterBot.30分置きにツイートします',
			visible: false
		}
		//{ name: "TAXONOMY", img: '', href: '', txt: '生物分類を個人的に整理するサイト.現在メンテナンス中.' },
	];
</script>

{#each projectList as project}
	<div
		style="height: 400px; position: relative; margin: 2rem 0;"
		use:viewport
		on:enterViewport|once={() => (project.visible = true)}
	>
		{#if project.visible}
			<div
				class="sn-box"
				style="background: url('/projects/{project.img}') center center / cover;"
				transition:fly={{ y: 100, delay: 200 }}
			>
				<div class="text-box">
					<p class="project-name">{project.name}</p>
					<p class="project-text">{project.txt}</p>
					<Button variant="outline" color="white" root="a" href={project.href}>
						<ExternalLink slot="leftIcon" />
						VISIT
					</Button>
				</div>
			</div>
		{/if}
	</div>
{/each}

<style>
	.sn-box {
		height: 400px;
		border-radius: 5px;
	}
	.text-box {
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}
	.text-box .project-name {
		font-size: 35px;
		font-family: var(--primaryFont);
		color: white;
	}
	.text-box .project-text {
		font-family: var(--primaryFont);
		color: white;
	}
</style>
