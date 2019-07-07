# 1.Gulp（ガルプ）とは

Gulpとは、Node.jsを使った**タスク自動化ツール**です。  
HTMLやCSSやJavaScriptファイルの圧縮や結合、`.scss`や`.sass`等の拡張子のファイルをCSSにビルド（出力）も自動化できるので、gulpが使えるようになると作業も効率はかどります。
gulpでプロジェクトファイルを作成しておくと、**自動化の手順を他の人と共有できる**ので、チームで開発する時にも力を発揮してくれます。

## よくあるタスク自動化の一例

- Sass(SCSS)やLessなどのAltCSSからビルド
- ベンダープレフィックスの自動付与
- PugやEJSなどのHTMLテンプレートエンジンのビルド
- ローカル環境でライブコーディング
- ファイルの結合
- HTML、JavaScript、CSSファイルの圧縮（minify）
- 画像ファイルの最適化
- ファイルの複製

…など他にもアイデア次第でいろいろ出来ます。

公式サイトはこちら。
[https://gulpjs.com/](https://gulpjs.com/)



## まずは Node.js と npmを端末にいれよう

各端末に **[Node.js と npmをインストール](./02-node-and-npm-install.md)** します。



### （余談）npmとは

`npm`の正式名称は、**Node Package Manager**です。
正式名称からも解るように、`Node.jsのパッケージ（Package ）を管理する（Manager）`ツールです。
Node.jsのパッケージ（Package）とは、予め用意された便利な機能をまとめたものです。