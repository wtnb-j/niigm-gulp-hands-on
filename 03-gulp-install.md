# 3.プロジェクトフォルダーの作成、package.jsonの作成、gulpのインストール


## 1.gulpのプロジェクトフォルダーの作成

gulpのプロジェクトフォルダを作成します。  
任意の場所で構いませんが、このハンズオンでは**ダウンロード（Download）**フォルダ内に作成します。  
フォルダ名は`gulp-project`とします。

## 2.package.jsonの作成

コマンドライン（Windowsではコマンドプロンプト、Macではターミナル）  
（以後、`黒い画面` と呼びます）を起動します。  
`cd（カレントディレクトリ）`というコマンドを使って、  
ダウンロードフォルダにある`gulp-project`ディレクトリまで移動しましょう。

また、`黒い画面`上で、
Windowsの場合`dir`を、Macの場合`ls`と入力すると、
今いるディレクトリーに含まれているフォルダやファイルを表示します。  
現在の位置（階層）を確認することが出来ます。

```bach
cd Downloads
cd gulp-project
```

無事にgulpのプロジェクトフォルダーにたどり着いたら、  
**package.json**ファイルを作成します。  
`黒い画面`で以下のコマンドを入力します。

```bash
npm init
```

`黒い画面`で以下の項目を聞かれますが、  
特記するものがなければ`Enterキー`の連打で構いません。  
カッコ内にあるものはデフォルト値です。

```bash
name: (gulp-project)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

licenseまでEnterキーを押し続けると、これで良い？と確認されます。  
ここも`Enterキー`を押します。

```bash
{
  "name": "gulp-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this OK? (yes)
```


## 3.gulpのインストール

次に **gulp** をインストールします。  
`黒い画面`で以下のコマンドを入力します。

```bash
npm install gulp gulp-cli -D
```

## 4.gulpがインストールされたか確認
念のために`黒い画面`で以下のコマンド入力し、  
gulpのバージョンが表示されればインストール成功です。

```bash
gulp -v
```

```bash
> Local version: 4.0.2
```

## 5.gulpでHello World を表示してみよう

用意されている`gulpfile.js`に、以下のコードを入力して保存します。

```js
// インストールしたパッケージの読み込み
var gulp = require('gulp');

// `hello`というタスクの宣言
gulp.task('hello', function(done) {
  // 黒い画面に「Hello World」というログ（文字）を表示させる
  console.log('Hello world');
  // callback = taskの終了
  done();
});
```

次に`黒い画面`で`gulp hello`を入力してみましょう。

```bash
gulp hello
```

```bash
> [HH:MM:SS] Using gulpfile ~/Downloads/gulp-project/gulpfile.js
> [HH:MM:SS] Starting 'hello'...
> Hello world
```

gulpを動かすことが出来ました✨🙌