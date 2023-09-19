---
title: "複数アカウントでTwitterAPIを使いまわす"
date: "2022-10-16"
categories:
  - "Python"
  - "Twitter"
coverImage: "/images/TwitterAPI.jpg"
coverWidth: 16
coverHeight: 9
excerpt: TwitterAPIを複数アカウントで使いまわす方法
---

私はTwitterでランダムツイートをするBOT（[クイズ勉強用bot](https://twitter.com/quiznotebot?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)）を運用していますが、機能を追加する場合などは本番環境でなく別の鍵アカウントで試したいと思いますよね。

TwitterのAPIを取得するには結構めんどくさいやり取りが必要で、試験環境のために新たに申請するのは気が引けます。

今回、今持っているAPIキーを使い回しできるようになりましたのでシェアします。

## APIを利用するために必要な4つのキー

- Consumer Key
- Consumer Secret
- Access Token
- Access Secret

APIからツイートやリツイートをするためには上記の4つのキーが必要になります。

このうち「Consumer Key」と「Consumer Secret」はどのアカウントを操作する場合でも共通して使えます。

一方「Access Token」と「Access Secret」操作するアカウント毎に必要になります。

つまり捨てアカウントを作成して、その「Access Token」と「Access Secret」を調べればそのまま試験環境でテストできます。

## Oauthを使ってアクセストークンを取得する

API申請済みのツイッターアプリに捨てアカウントでログインすることでアクセストークンを取得します。

今回はPythonからアクセストークンを取得するための最も単純なプログラムを作成しましたのでご活用ください。

```python
import tweepy #4.10.1

CONSUMER_KEY = "YOUR_CONSUMER_KEY" #自分のAPIキーを設定する
CONSUMER_SECRET = "YOUR_CONSUMER_SECRET" #自分のAPIキーを設定する

oauth1_user_handler = tweepy.OAuth1UserHandler(CONSUMER_KEY, CONSUMER_SECRET)

#認証ページのURLを表示
print(oauth1_user_handler.get_authorization_url())

#コールバック先のクエリoauth_verifierを入力
verifier = input("verifier : ")

#アクセストークンを取得
ACCESS_TOKEN, ACCESS_TOKEN_SECRET = oauth1_user_handler.get_access_token(verifier)

#アクセストークンを表示
print("ACCESS_TOKEN :", ACCESS_TOKEN)
print("ACCESS_TOKEN_SECRET :", ACCESS_TOKEN_SECRET)
```

実行するとまず認証ページのURLが表示されますのでブラウザからアクセスします。

![alt](/images/post-images/1401.png)

捨てアカウントでログインした状態で「連携アプリを認証」をクリックすると以下のようなコールバックURLに飛ばされます。

```
https://〇〇?oauth_token=〇〇&oauth_verifier=〇〇
```

このクエリパラメータのうちoauth_verifierの値をコピーして先ほどのプログラムにペーストしてエンターを押すと「Access Token」と「Access Secret」が表示されます。

1度生成すればずっと使えるようですが、再生成すると前のトークンは上書きされて使えなくなるようです。
