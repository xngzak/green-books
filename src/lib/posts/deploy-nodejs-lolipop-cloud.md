---
title: "ロリポップマネージドクラウドでNode.jsアプリをデプロイする方法"
date: "2021-10-29"
categories:
  - "Node.js"
coverImage: "/images/lolipop-node.png"
coverWidth: 16
coverHeight: 9
excerpt: ロリポップマネージドクラウドでNode.jsアプリをデプロイする方法
---

Expressを使用します。

```
mkdir sample
cd sample
git init
echo 'node_modules' >> .gitignore
npm init
npm install express
npm install socket.io
```

/var/app/sample/app.jsを作成して次のようにします。

```js
//expressモジュールを使えるように設定
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
  cors: {
    origin: "https://xxx.xxx",
    methods: ["GET", "POST"],
    allowedHeaders: ["Access-Control-Allow-Origin"],
    credentials: true
  }
})

// HTTPgetメソッドでアクセスしたら、'Hello World!'と表示される設定。
app.get('/', function (req, res) {
  res.send('Hello world')
})

server.listen(80)
```

/var/app/sample/package.jsonを編集します。

```json
{
  "scripts": {
    "start": "node ./app.js"
  }
}
```

デプロイします。

```
git add .
git status
git commit -m "first commit"
git push lolipop master
```
