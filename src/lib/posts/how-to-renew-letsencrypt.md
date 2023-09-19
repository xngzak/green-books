---
title: "Let's Encryptの更新期限が過ぎてしまったら"
date: "2022-12-5"
categories:
  - "サーバ管理"
coverImage: "/images/letsencrypt.png"
coverWidth: 16
coverHeight: 9
pageView: 7
excerpt: Let's Encryptで取得したSSL証明書の有効期限が切れてしまったらどうするか解説します
---

Let's Encryptは、無料で使えるSSL/TLS証明書を提供する認証局です。 Certbotというツールを使って簡単にHTTPS化することができます。

SSL証明書は無料で取得できますが、有効期限があり3ヶ月に1度は更新する必要があります。

今回通常通り手動更新しようとしたところ有効期限が切れておりハマってしまいました。

初回導入方法、更新方法、期限切れの対処法、自動化方法を備忘録として残します。


<div class="toc"/>

- [前提環境](#前提環境)
- [初回導入方法](#初回導入方法)
  - [WEBサーバを建てる](#webサーバを建てる)
  - [Certbotのインストール](#certbotのインストール)
- [手動更新方法](#手動更新方法)
- [更新期限が切れてしまった場合](#更新期限が切れてしまった場合)
- [自動で更新させる](#自動で更新させる)

## 前提環境

- Ubuntu 20.04.5 LTS
- Node.js 14.19.1
- express 4.17.1

独自ドメインを取得してアクセスできることを確認しておく。

## 初回導入方法

### WEBサーバを建てる
expressを使って以下のような感じで適当にapp.jsを作成しました。

```js
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

app.get('/', function (req, res) {
  res.send('Hello world')
})
server.listen(80)
```

念のため起動確認しておく。

### Certbotのインストール

PPAを登録してインストールします。

```bash
sudo apt-get update

sudo apt-get install software-properties-common

sudo add-apt-repository universe

sudo add-apt-repository ppa:certbot/certbot

sudo apt-get update

sudo apt-get install certbot
```

```bash
sudo certbot certonly --standalone --dry-run
```

--dry-runオプションを付けることで実行した際にどのような結果が得られるかを事前に確認することができます。メールアドレスやドメインなど質問されて正しく登録できていれば以下を実行します。

```bash
sudo certbot certonly --standalone
```

成功すると以下のファイルが作成されるので

```bash
/etc/letsencrypt/live/example.com/fullchain.pem
/etc/letsencrypt/live/example.com/privkey.pem
```

expressで読み込んでHTTPS化します。以下の例ではHTTPアクセスをリダイレクトさせています。

```js
const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const app = express()

let options = {
    key: fs.readFileSync('/etc/letsencrypt/live/example.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/example.com/fullchain.pem'),
}

const server = http.createServer(options, app)

app.get('/', function (req, res) {
  res.send('Hello world')
})

server.listen(443)
http.createServer((express()).all("*", function (request, response) {
  response.redirect(`https://${request.hostname}${request.url}`);
})).listen(80);
```


## 手動更新方法

※ポートが使用中だとうまく更新できないためWEBサーバは停止しておきます。

有効期限を確認して

```bash
sudo certbot certificates
```

更新

```bash
sudo certbot renew --dry-run
sudo certbot renew
```

何事もなければ有効期限が残り89日になっています。


## 更新期限が切れてしまった場合

更新期限が切れてしまった場合再取得が必要になります。

古い証明書は削除する必要があるので、念のためバックアップを取っておきます。

```bash
sudo mkdir /etc/letsencrypt/live/bak
mv /etc/letsencrypt/live/example.com /etc/letsencrypt/live/bak
```

バックアップを取ったら新規取得と同じ手順で以下を実行します。

```bash
sudo certbot certonly --standalone --dry-run
sudo certbot certonly --standalone
```

以下のようなフォルダが新しく作成されるのでexpressで証明書を読み込む際のパスも変更しましょう。

```bash
/etc/letsencrypt/live/example.com-0001/
```

古い設定ファイルは必要ないため削除しました。

```bash
rm /etc/letsencrypt/renewal/example.com.conf
```

## 自動で更新させる

手動更新を忘れていたため更新期限を過ぎてしまいましたので、cronを使って60日ごとに自動でLet's Encrypt証明書を更新するプログラムを書きます。

crontabファイルに以下のような設定を追加します。

```bash
0 0 * * * /path/to/renew-letsencrypt-certs.sh
```

この設定を追加することで、毎日0時0分に、/path/to/renew-letsencrypt-certs.sh というプログラムが実行されるようになります。

続いてrenew-letsencrypt-certs.shを作成します。

```bash
#!/bin/bash
certbot renew
```

以下のコマンドでrenew-letsencrypt-certs.shを実行可能にします。

```bash
chmod +x /path/to/renew-letsencrypt-certs.sh
```


更新頻度には週に5回までの制限がありますが、上記のプログラムで証明書が毎日更新されることはありません。

これは、Let's Encryptが証明書を更新するための条件として、証明書の有効期限が30日以内であることを要求しているためです。

つまり証明書の有効期限が30日以上の場合、実行されますが、証明書は更新されません。
