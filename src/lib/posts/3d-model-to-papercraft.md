---
title: "3Dモデルからペーパークラフトを作る"
date: "2022-2-21"
updated: "2022-2-21"
categories:
  - "Blender"
coverImage: "/images/pikachu.png"
coverWidth: 16
coverHeight: 9
excerpt: 3Dモデルからペーパークラフトを作る
---
<script>
  const cardlist = [
  	{alt: "Head 1", src: '/images/post-images/Head1.svg'},
  	{alt: "Head 2", src: '/images/post-images/Head2.svg'}
  ];
</script>


モデリングの練習にピカチュウの3Dモデルを作ったので、ペーパークラフトにします。

Blenderのアドオン「Export Paper Model」を使って展開図をエクスポートします。
最新版では標準搭載されているため、ファイル＞ユーザー設定＞アドオンからpaper等で検索し有効化します。

- ファイル＞エクスポート＞Paper Model (.svg)を選択
- Create Tabsにチェック(のりしろを付ける設定)
- Export Paper Modelをクリックして保存

のりしろがうまく生成できないところがあるためInkscape等で手書きします。

## 出力結果

### 頭部の展開図

<ul class="costom-scroll" style="overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;">
  {#each cardlist as card}
    <li style="display: inline-block; margin: 10px;">
      <img class="carda" src="{card.src}" alt="{card.alt}" style="height: 590px; border: solid 1px #ccc; border-radius: 12px;">
    </li>
  {/each}
</ul>

<a href="/downloads/Head.zip" download="Head.zip">ダウンロードする</a>

### 全身の展開図

体の展開図も以下からダウンロードできるようにしましたので興味のある方は購入してください。

[購入する](https://xiangzaki.booth.pm/items/3954231)
