<script>
	import Gallery from '$lib/components/Gallery.svelte';
	const images = [
		{ src: 'ニラちゃん.webp' },
		{ src: 'アスカ.webp' },
		{ src: 'ミク2.webp' },
		{ src: 'デルミン.webp' },
		{ src: 'ジャンヌ.webp' },
		{
			src: 'フォニイ.webp',
			text: '<a href="https://www.youtube.com/watch?v=2iamOL9EvhI">フォニイ / DJふぉい【歌ってみた】</a>'
		},
		{
			src: 'ヴァンパイア.webp',
			text: '<a href="https://www.youtube.com/watch?v=JEigFES3CnA">ヴァンパイア / DJふぉい【歌ってみた】</a>'
		},
		{
			src: 'グッバイ宣言.webp',
			text: '<a href="https://www.youtube.com/watch?v=Q7di6O7KCAs">グッバイ宣言 / DJふぉい【歌ってみた】</a>'
		},
		{ src: '中野三玖.webp' },
		{ src: 'KILLJOY.webp' },
		{ src: 'ディズィー.webp' },
		{ src: 'バシリスク.webp' },
		{ src: '零夜.webp' },
		{ src: 'まとい.webp' },
		{ src: 'ミク1.webp' },
		{ src: 'ヤトウモリ.webp' },
		{ src: '猫宮.webp' },
		{ src: 'GBG.webp' },
		{ src: 'ピカチュウ3D.webp' },
		{ src: 'ダンゴムシ.webp' },
		{ src: 'ゾウムシ.webp' },
		{ src: 'あみ.webp' },
		{ src: 'cat.webp' },
		{ src: 'レペゼンDVD1.webp' },
		{ src: 'レペゼンDVD2.webp' },
		{ src: 'スプラ.webp' },
		{ src: 'テスラ.webp' },
		{ src: '標本1.webp' },
		{ src: '標本2.webp' },
		{ src: '標本3.webp' }
	];
</script>

<Gallery gap="10" maxColumnWidth="200" {images} />
