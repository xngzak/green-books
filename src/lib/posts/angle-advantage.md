---
title: "【図解】壁近・壁遠の法則【シミュレーション】"
date: "2023-5-20"
categories:
  - "ゲーム"
  - "自由研究"
coverImage: "/images/angle-advantage.png"
coverWidth: 16
coverHeight: 9
pageView: 8
excerpt: FPSでなぜ壁に近いと不利なのか図を使って解説します。
---

この記事ではFPSにおける「壁近・壁遠の法則」について解説します。

海外ではアングルアドバンテージとも呼ばれ、壁から遠い方が有利というものですが、初めて聞いたときは全く実感が湧きませんでした。

こちらがピークするとき壁に近づきすぎた場合、壁から離れている敵の方が先にこちらを視認できるというのです。なぜそうなるのでしょうか、というか本当でしょうか。シミュレータを作ったので確かめてみましょう。

ふむ、確かに障害物に近いプレイヤーは先に見られ、遠いプレイヤーは先に相手を見ることができています。肩幅と視点カメラが体の前についていることが関係してるようです。1人称視点では自分の体が意外と大きいことを忘れてしまいますね。

## シミュレーション

実際にプレイヤーを動かして確認してみましょう。少しでも壁から遠ざかった方が有利であることが分かるはずです。

<div style="text-align: center;">
<iframe src="https://openprocessing.org/sketch/1933484/embed/" width="505" height="550"></iframe>
</div>

PCから閲覧してる場合WASDで移動、1or2でプレイヤー切り替えできます。視野角はValorantと同じ103度に設定しています。

## 典型パターン

FPSでよく見るシチュエーションをいくつかピックアップしました。こちらの基本戦略はシンプルで、壁から離れるそれだけです。

### 1. ロング

![alt](/images/post-images/angle-advantage-1.gif)

### 2. 建物の角

![alt](/images/post-images/angle-advantage-2.gif)

### 3. 箱周り

![alt](/images/post-images/angle-advantage-3.gif)

### 4. 通路の曲がり角

![alt](/images/post-images/angle-advantage-4.gif)

## まとめ

エイムを鍛えたりスキルや戦術を覚えることも重要ですが、もっと根底にある基本的な法則は意外と見落とされがちです。腕力や駆け引きで負けることはもちろんありますが、この基本的な知識が勝敗を決めてしまうのはもったいないことです。

今回解説したアングルアドバンテージの他に[ピーカーズアドバンテージ](https://dotesports.com/valorant/news/peekers-advantage-in-valorant-explained)(覗き込み有利)と呼ばれるものがあるので機会があれば次回。
