# 5.GulpでSass(SCSS)をやってみよう 💪

## 1. Sassを使うために必要なライブラリを導入します

gulpでsassをビルドするために必要な`gulp-sass`と、ビルドされるcssファイルを圧縮（minify）する`gulp-clean-css`を入れます。

### 入れるもの
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)

### 入れ方
`黒い画面`で以下のコマンドを入力します。

```bash
npm install -D gulp-sass gulp-clean-css
```


## 2. SCSSファイルを書いてみる

```scss
p {
  color: red;
  span {
    color: yellow;
  }
  &:hover {
    text-decoration: underline;
  }
}
```


## 3. gulpfile.jsにSassのビルド（CSSの生成）の処理を書いてみます

```js
// インストールしたパッケージを使う宣言
const sass = require("gulp-sass");

// SASS
gulp.task('sass', function(done) {
  return gulp
    .src(["./src/sass/**/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
  done();
});
```


## 4. gulpfile.jsにcssのminify（CSSの圧縮）の処理を書いてみます

```js
// インストールしたパッケージを使う宣言
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css"); // <- 追加

// SASS
gulp.task('sass', function(done) {
  return gulp
    .src(["./src/sass/**/*.scss"])
    .pipe(sass())
    .pipe(cleanCss()) // <- 追加
    .pipe(gulp.dest('dist/css'));
  done();
});
```


## 5. 実際に他のプラグインを入れてみよう

### 入れると便利そうなもの
- ベンダープレフィックスを自動付与するやつ
  - [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- バラバラに書いたメディアクエリをブレークポイントごとにまとめてくれるやつ
  - [gulp-merge-media-queries](https://www.npmjs.com/package/gulp-merge-media-queries)

#### 入れたサンプル
```bash
npm install -D gulp-autoprefixer gulp-merge-media-queries
```

```js
// sass
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const autoprefixer = require('gulp-autoprefixer');
const mmq = require('gulp-merge-media-queries');

// SASS
gulp.task('sass', function(done) {
  return gulp
    .src(["./src/sass/**/*.scss"])
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(mmq({
      log: true
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'));
  done();
});
```


```scss
p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  span {
    color: yellow;
  }
  &:hover {
    text-decoration: underline;
  }
  @media all and (min-width: 480px) {
    span {
      color: sienna;
    }
  }
  @media all and (min-width: 767px) {
    span {
      color: rebeccapurple;
    }
  }
  @media all and (min-width: 480px) {
    span {
      border-bottom: 1px dotted yellowgreen;
    }
  }
}
```

実行させるには以下のコマンド。
```bash
gulp sass
```

### 5.5 なんか怒られた
```
  Replace Autoprefixer browsers option to Browserslist config.
  Use browserslist key in package.json or .browserslistrc file.

  Using browsers option cause some error. Browserslist config 
  can be used for Babel, Autoprefixer, postcss-normalize and other tools.

  If you really need to use option, rename it to overrideBrowserslist.

  Learn more at:
  https://github.com/browserslist/browserslist#readme
  https://twitter.com/browserslist
```

`gulp-autoprefixer` の Browserslistの指定が非推奨でした。（公式で書いてあるのに…？🤔）  
正しくは`package.json`に書いてあげる、または`.browserlistrc`というファイルを作成して書いてあげる必要がある。  
なので、今回は`package.json`に書いてみましょう。

```js
// package.json
"browserslist": [
  "last 2 version"
],
```

再度実行

```bash
gulp sass
```

怒られなくなった🙌✨