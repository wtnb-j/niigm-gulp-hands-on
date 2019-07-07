# 2.Node.js / npm のインストール（Windowsの場合）

参考：https://qiita.com/ksh-fthr/items/fc8b015a066a36a40dc2

※ 事前に **nodist** を入れている場合はこの章は作業を行わなくても良いです。


## 1. 公式ページ（Github）のインストーラーページからインストーラー(exeファイル)をダウンロードする

https://github.com/nullivex/nodist/releases

※ 今回は v0.9.1 をダウンロードするため `NodistSetup-v0.9.1.exe` をダウンロードします。


## 2. インストーラーに従ってインストールをしてください。

## Nodist のバージョンを確認します。

```bash
nodist -v
```

`0.9.1` と表示されていれば Nodist のインストールは完了です。


## 3. node.js を Nodist を使ってインストールする

以下のコマンドで使用可能な node.js のバージョン一覧が表示されます。

```bash
nodist dist
```

今回は 安定版の `v12.9.0` をインストールします。


```bash
nodist + 12.9.0
```

使用する node.js のバージョンを指定します。  

```bash
nodist global 12.9.0
```

最後に node.js のバージョンを確認します。

```bash
$ node -v
```

指定したバージョンが表示されたら、無事インストール完了です。