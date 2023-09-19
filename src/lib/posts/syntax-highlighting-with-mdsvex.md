---
title: "MDsveXでシンタックスハイライト"
date: "2021-12-01"
updated: "2021-12-01"
categories:
  - "SvelteKit"
  - "マークダウン"
coverImage: "/images/mdsvex.png"
coverWidth: 16
coverHeight: 9
excerpt: MDsveXのシンタックスハイライトの使い方
---

[MDsveX](https://mdsvex.com/)とはSvelte用のマークダウンプロセッサーです。基本的にはMDXと同じです。
mdファイル中にSvelteコンポーネントを書くことができます。
逆にSvelteコンポーネント中にmdを書くこともできます。

MDsveXは[Prism.js](https://prismjs.com/)を含んでいるため言語名を書くだけで簡単にシンタックスハイライトが使えます。

```
\```css
/* Your CSS here */
\```
```

↓このようにレンダリングされます。

```css
.my-css-class {
  color: #ffd100;
  box-sizing: border-box;
  /* etc... */
}
```

## 使用できる主要言語

|言語名|クラス名|
|--- |---|
|HTML|html|
|CSS|css|
|JavaScript|js|
|TypeScript|ts|
|PowerShell|powershell|
|Python|py|

もしテーマカラーを変更したい場合は`_prism.scss`を編集する必要があります。
