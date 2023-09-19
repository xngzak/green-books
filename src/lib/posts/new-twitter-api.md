---
title: "新しいTwitterAPIを試す"
date: "2023-5-8"
categories:
  - "Twitter"
coverImage: "/images/newTwitterAPI.png"
coverWidth: 16
coverHeight: 9
excerpt: Twitterの新しいAPIプランについて
---
2023年3月、Twitterは新しいAPIプランを発表しいくつかのサービスに影響が出ています。私の使用していたツールもサービス終了になり、これを機に自宅のサーバーでbotを運用することにしました。

これまでのAPIプランでは無料でツイートやタイムラインの取得やフォロー操作等ができていましたが今回の新プラン無料枠では自分の情報取得とツイートの作成・削除のみ提供しています。具体的なリクエストは以下の3つです。

**POST /2/tweets**
50 requests / 24 hours PER APP
50 requests / 24 hours PER USER

**DELETE /2/tweets/:id**
50 requests / 24 hours PER APP
50 requests / 24 hours PER USER

**GET /2/users/me**
25 requests / 24 hours PER USER

無料枠では月1500ツイートできるため30分に1回（31日で1488回）ツイートが可能です。
[Developer Portal](https://developer.twitter.com/en/portal/)から各種キーを取得して、以下のようにTweepyから接続テストをしました。

```python
import tweepy #4.14.0

BT = "YOUR_BEARER_TOKEN"
CK = "YOUR_CONSUMER_KEY"
CS = "YOUR_CONSUMER_SECRET"
AT = "YOUR_ACCESS_TOKEN"
ATS = "YOUR_ACCESS_TOKEN_SECRET"

# Twitter接続
auth = tweepy.OAuthHandler(CK, CS)
auth.set_access_token(AT, ATS)
api = tweepy.API(auth) # v1の使用
client = tweepy.Client(bearer_token=BT, consumer_key = CK, consumer_secret=CS, access_token=AT, access_token_secret=ATS) # v2の使用

# フォロワー数とフォロー数を表示する
me = client.get_me(user_fields=['public_metrics'])
print("フォロワー数:", me.data.public_metrics['followers_count'])
print("フォロー数:", me.data.public_metrics['following_count'])

# 画像付きでツイート
message = "MESSAGE"
image_path = "IMAGE_PATH" # 画像パス
media = api.media_upload(filename=image_path)
client.create_tweet(text=message, media_ids=[media.media_id])

# 文字だけでツイート
client.create_tweet(text=message)
```

アクセストークンの取得方法は[前回の記事](https://xiang.jp/blog/twitter-api-with-multiple-accounts/)を参照してください。

LINUXサーバで30分置きにツイートするにはcrontabファイルを編集します。以下はubuntu 20.04 LTSの例です。

```bash
crontab -e

# 以下を最終行に追記
*/30 * * * * /bin/python3 /home/xiang/quiznotebot/tweetQuiz.py
```

これは再起動後も実行されるため一時的にジョブを無効にするには、crontab -eで開いたエディタで該当の行の先頭に#を追加してコメントアウトする必要があります。
