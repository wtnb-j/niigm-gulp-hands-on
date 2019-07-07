# 6.HTMLの圧縮やJSの結合や圧縮をやってみよう

## 1. HTMLの圧縮を使うために必要なライブラリを導入します

gulpでHTMLファイルを圧縮（minify）するために必要な`gulp-htmlmin`を入れます。

### 入れるもの
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)

### 入れ方
`黒い画面`で以下のコマンドを入力します。

```bash
npm install -D gulp-htmlmin
```


## 2. HTMLファイルを書いてみる

```html
<!-- src/index.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Title</title>
</head>
<body>
  <p>ここに本文が入ります。あああああああああ</p>
</body>
</html>
```


## 3. gulpfile.jsにHTMLのビルド（HTMLの圧縮）の処理を書いてみます

```js
// インストールしたパッケージを使う宣言
const htmlmin = require('gulp-htmlmin');

// HTML
gulp.task('html', function(done) {
  return gulp
    .src(["./src/**/*.html"])
    .pipe(htmlmin({
      // 余白を除去する
      collapseWhitespace : true,
      // HTMLコメントを除去する
      removeComments : true
    }))
    .pipe(gulp.dest('dist'))
  done();
});
```

実行させるには以下のコマンド。
```bash
gulp html
```

`dist/index.html`を確認したら圧縮された🙌✨




## 4. JSの結合や圧縮を使うために必要なライブラリを導入します

gulpでJSファイルを圧縮（minify）するために必要な`gulp-uglify`と、JSファイルの結合を行う`gulp-concat`を入れます。

### 入れるもの
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)

### 入れ方
`黒い画面`で以下のコマンドを入力します。

```bash
npm install -D gulp-uglify gulp-concat
```


## 2. 圧縮と結合を行うJSファイルを用意してみる

```js
// src/js/alert.js
alert('Hello Gulp!!');
alert('Hello World!!');

// src/js/consoleLog.js
console.log('Hello World!!');
```


## 3. gulpfile.jsにJSのビルド（JSの結合・圧縮）の処理を書いてみます

```js
// インストールしたパッケージを使う宣言
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// JS
gulp.task('js', function(done) {
  return gulp
    .src(["./src/js/**/*.js"])
    // 結合処理
    .pipe(concat('common.js'))
    // 圧縮処理
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
  done();
});
```

実行させるには以下のコマンド。

```bash
gulp js
```

`dist/js/common.js`を確認したら結合して、圧縮された🙌✨
