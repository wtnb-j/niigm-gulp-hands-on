# 4.Sass is 何？🤔

## Sassとは
Sassは日本語では「**サス**」と呼ばれます。たまに「**サース**」と言う人もいますが、意味が伝わればどちらでも構いません。Sassは「**CSSに対して機能を拡張した言語**」メタ言語です。  
メタ言語とは、「**ある言語について何らかの記述をするための言語**」です。メタ言語と言っても馴染みがないかもしれませんが、「ふーん、そういうものなんだ」くらいの認識でよいです。  
また、JavaScriptにもメタ言語があり、CoffeeScript とか TypeScript などがあります。

では、実際の`CSS`と`Sass`のコードをまず見てみましょう。

### `CSS`で表現すると...
```css
.hoge {
  margin: 0 auto;
  width: 640px;
}
.hoge p {
  margin-bottom: 1em;
}
.hoge p:last-child {
  margin-bottom: 0;
}
```

### `SCSS記法`のSassで表現すると...
```scss
.hoge {
  margin: 0 auto;
  width: 640px;

  /* .hoge p */
  p {
    margin-bottom: 1em;

    /* .hoge p:last-child */
    &:last-child {
      margin-bottom: 0;
    }
  }
}
```

## Sassの便利なところ

### 入れ子（ネスト）が使えるので、記述が省略できる

上記のコードでも紹介しましたが、1つのタグやクラスに対して、1つのカッコで完結するのがCSSでは普通ですが、Sassでは下記のコードのように入れ子にして書くことが出来ます。  
長々と階層を書かなくても良くなりますが、ネストのしすぎも読みにくくなる原因なので、やりすぎには注意しましょう。

```scss
a {
  color: black;
  text-decoration: underline;
  // a:hover
  &:hover {
    color: red;
    text-decoration: none;
  }
}
```

#### さっきから出ている `&（アンパサンド）`はなにものか？

**&（アンパサンド）** を使用すると、親セレクタの参照をすることができます。  
同じ入れ子内に指定するので、読みやすくなります。

### 変数を使い、同じ値を使いまわす

変数を定義することで、同じ値を使い回すことが出来ます。  
もし色変更の修正が入り、$mainColorの色を`#98FE5D`に変更になったとしても、全部置換処理をするようなことをせず、一箇所変更することで事が済みます。

```scss
$mainColor: #12AB5F;

h1 {
  color: $mainColor;
}

.box {
  .inner {
    background: $mainColor;
    color: #FFF;
  }
}
```

### 複数のSCSSファイルを1つのCSSファイルにまとめる

CSSにも`@import`はありますが、CSSの場合は別のCSSファイル用意する必要があり、読み込むように使われます。  
一方Sassの`@import`は出力する際に一つのCSSにまとめることも可能です。、Sassファイルを分割して、用途に応じてSassファイルを分割することで、どこにどの記述が書いてあるかがわかりやすくなるため、メンテナンスコストを抑えることができます。

```scss
// ex) ./style.scss 内の記述の場合

// リセットCSS
@import "_reset.scss";

// 各個別のページ
@import "_top.scss";
@import "_news.scss";
@import "_about.scss";
```

#### 変数をまとめたSassファイルをビルドしたくない場合

Sassファイルをビルドしたくない場合は、`_variable.scss`のように **_(アンダースコア)** をつけると出力されなくなります。
