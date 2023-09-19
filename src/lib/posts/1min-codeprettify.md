---
title: "1分でコード装飾「code-prettify」"
date: "2021-12-01"
updated: "2021-12-01"
categories:
  - "CSS"
coverImage: "/images/coding.png"
coverWidth: 16
coverHeight: 9
excerpt: Google code-prettifyを使ってコード装飾
---

## クイックスタート


```
<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=py&amp;skin=sunburst"></script>
<pre class="prettyprint">
print("hello world")
</pre>
```

実行結果

```
<pre class="prettyprint">
print("hello world")
```

## カスタマイズ

### 言語選択

デフォルトでは自動判別されますが指定することもできます。

|言語名|クラス名|
|--- |---|
|HTML|lang-html|
|CSS|lang-css|
|JavaScript|lang-js|
|PHP|lang-php|
|Python|lang-py|

### スキン選択

[Gallery of themes for code prettify](https://rawgit.com/google/code-prettify/master/styles/index.html)
[COLOR THEMES FOR GOOGLE CODE PRETTIFY](https://jmblog.github.io/color-themes-for-google-code-prettify/)

から選ぶことができます。

## 公式ドキュメント

[Getting Started](https://github.com/googlearchive/code-prettify/blob/master/docs/getting_started.md)
