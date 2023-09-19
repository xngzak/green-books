---
title: "SvelteKitでスケルトンサイトを立てる"
date: "2022-3-08"
categories:
  - "SvelteKit"
  - "Node.js"
coverImage: "/images/sveltekit.png"
coverWidth: 16
coverHeight: 9
excerpt: SvelteKitでスケルトンサイトを立てる
---

## 事前準備

事前にNode.jsのインストールをしておきます。

プロジェクトを保存するフォルダに移動して

```powershell
npm init svelte@next test
```

を実行します。testにはプロジェクト名を入れます。

![alt](/images/post-images/1201.png)

設定を済ませるとこのようにプロジェクトファイルが生成されます。

![alt](/images/post-images/1202.png)

## 起動

```powershell
cd test
npm install
npm run dev
```


で起動します。  
[http://localhost:3000/](http://localhost:3000/)にアクセスして以下の画面が出るか確認してください。

![alt](/images/post-images/1203.png)
