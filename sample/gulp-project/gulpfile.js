// インストールしたパッケージの読み込み
var gulp = require('gulp');

// `hello`というタスクの宣言
gulp.task('hello', function(done) {
  console.log('Hello world');
  done();
});


// sass
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const autoprefixer = require('gulp-autoprefixer');
const mmq = require('gulp-merge-media-queries');

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
    .pipe(reload({ stream: true }));
});


// HTML
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
    .pipe(reload({ stream: true }));
});


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
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({ stream: true }));
});





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
