# 7.ローカル環境でのコーディング環境の構築

## 1. ローカル環境でのコーディング環境を実現するために必要なライブラリを導入します

ブラウザを自動リロードするために必要な`browser-sync`を入れます。

### 入れるもの
- [browser-sync](https://www.npmjs.com/package/browser-sync)

### 入れ方
`黒い画面`で以下のコマンドを入力します。

```bash
npm install -D browser-sync
```


## 2. gulpfile.jsにHTMLのビルド（HTMLの圧縮）の処理を書いてみます

```js
// gulpfile.js（追加）

const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

gulp.task('default', function(done) {
  // ローカルサーバーの設定
  browserSync.init({
    port: 8000,
    server: {
      // ルートとなるディレクトリを指定
      baseDir: "dist/",
      // 画面右上の通知の設定
      notify: true,
    }
  });
  gulp.watch('src/sass/**/*.scss', gulp.task('sass'));
  gulp.watch('src/js/**/*.js', gulp.task('js'));
  gulp.watch('src/**/*.html', gulp.task('html'));
  done();
});
```

各タスクのdistディレクトリへの生成後に`.pipe(reload({ stream: true }));`を追加します。

```js
// gulpfile.js（追加）


// SASS
gulp.task('sass', function(done) {
  return gulp
    .src(["./src/sass/**/*.scss"])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(mmq({
      log: true
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream: true })); // <= 追加
});

// 〜 中略 〜

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
    .pipe(reload({ stream: true })); // <= 追加
});

// 〜 中略 〜

// JS
gulp.task('js', function(done) {
  return gulp
    .src(["./src/js/**/*.js"])
    // 結合処理
    .pipe(concat('common.js'))
    // 圧縮処理
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({ stream: true })); // <= 追加
});
```

実行させるには以下のコマンド。
```bash
gulp
```

コマンドを実行すると以下のようなログが表示されます。
```bash
USERNAME:gulp-project$ gulp
[HH:MM:SS] Using gulpfile ~/Downloads/gulp-project/gulpfile.js
[HH:MM:SS] Starting 'default'...
[HH:MM:SS] Finished 'default' after 39 ms
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:8000
    External: http://192.168.10.8:8000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 -------------------------------------
```

`src配下のSCSSファイルや、HTMLファイル、JSファイル`を編集すると…

```bash
[HH:MM:SS] Starting 'html'...
[Browsersync] 1 file changed (index.html)
[HH:MM:SS] Finished 'html' after 8.24 ms
[Browsersync] Reloading Browsers...
```

`gulp.watch`で指定された **srcディレクトリ**の特定の拡張子ファイルを更新する度に、指定されたタスクが実行され、**dist/**に生成された後、`.pipe(reload({ stream: true }));`によってローカル環境が自動でリロードされた🙌✨

ローカル環境を閉じる際はWindowsなら`Ctrl + C`、maxOSなら`cmd + C`で閉じることができます。  
再度、ローカル環境を立ち上げる際はコマンドラインでgulpのあるディレクトリまで移動し、`gulp`とコマンドを実行するだけで良いです。