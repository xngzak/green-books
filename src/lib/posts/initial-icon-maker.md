---
title: TeamsやMicrosoftアカウントの初期アイコンを自動生成する
date: "2022-12-11"
updated: "2022-12-11"
categories:
  - "プロジェクト"
coverImage: "/images/initial-icon-maker.webp"
coverWidth: 16
coverHeight: 9
excerpt: TeamsやMicrosoftに使うアイコンを本家そっくりに自動生成するサービスを作りました。
---

<script>
	import BlogCard from '$lib/components/BlogCard.svelte';
</script>

TeamsやMicrosoftに使うアイコンを本家そっくりに自動生成するサービスを作りました。

- 表示名、色、フォントの変更
- 初期アイコンのプリセット選択（Teams、Microsoftアカウント、カスタム）
  - TeamsタブはTeamsそっくりの色とフォントで表示名を変更できます。
  - MicrosoftタブはMicrosoftアカウントそっくりの色とフォントで表示名を変更できます。
  - カスタムタブは色とフォントが自由にカスタムできるタブです。
- 画像の保存

ができます。作成は下のバナーから。

<BlogCard href="https://icon-maker.xiang.jp" title="初期アイコンメーカー" src="/images/initial-icon-maker.webp" description="TeamsやMicrosoftアカウントの初期アイコンを自動生成する"/>

「本家そっくりのフォント＋本家そっくりの色」でカスタムアイコンを作れるため、

**「色を変えたい」「名字だけ表示したい」**に答えることができます。

何でこんなものを作ったかというと、仕事でTeamsを使用してるのですが、事情があって表示名を変更する必要がありました。
日本にイニシャルを使う文化はないので「山田太郎」→「山太」のような表記は不自然ですし前と違う色になり違和感が…。

丁度何か作りたいと思ってたのでカラーピッカーでせっせと色リスト作って公開できるレベルまで仕上げました。
ついでにMicrosoftアカウント仕様も選択できるようにしたのでお役に立てば何よりです。

#### 追記

スマホでも長押しで保存できるようにアップデートしました。

## Teamsのプロフィール画像の変更方法

デスクトップ版のTeamsでプロフィール画像を変更するには、まず画面の右上にある現在の画像をクリックしてナビゲーションを表示させます。

![alt](/images/post-images/pic-1501.png)

プロフィール画像にポインタを合わせてカメラアイコンをクリックします。

![alt](/images/post-images/pic-1502.png)

アップロードボタンからアイコンメーカーで作った素敵な画像をアップロードして、

![alt](/images/post-images/pic-1503.png)

保存します。

![alt](/images/post-images/pic-1504.png)