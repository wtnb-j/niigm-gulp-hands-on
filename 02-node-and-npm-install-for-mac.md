# 2.Node.js / npm のインストール（macの場合）

参考：https://qiita.com/mame_daifuku/items/373daf5f49ee585ea498

※ 事前に **nodebrew** を入れている場合はこの章は作業を行わなくても良いです。


## 1. node.jsが入っているかどうかの確認
```bash
$ node -v
```

これで反応がなければOKです。

```bash
v10.15.3
```
のような反応がある場合は、既にnode.jsがinstallされているので、削除を行ってから nodebrew をインストールします。


## 2. nodebrewをインストール

`黒い画面`で以下のコマンドを入力します。

```bash
$ curl -L git.io/nodebrew | perl - setup
...
========================================
Add path:

export PATH=$HOME/.nodebrew/current/bin:$PATH
========================================
```

Add pathと出ているので、 `~/.bashrc`または`~/.bash_profile`に上記のpathを追加します。


## 3. .bashrc または ~/.bash_profile にPathを通す

ユーザーのディレクトリから`~/.bashrc`または`~/.bash_profile`を探し、テキストエディタで開きます。  
ユーザーのディレクトリを表示させるためには、以下のコマンドを入力します。

```
$ open ~/
```

`~/.bashrc`または`~/.bash_profile`をテキストエディタで開いたら、

```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```
を追加します。

上記のpathを追加したら、`~/.bashrc`または`~/.bash_profile`を読みなおすため、黒い画面で以下のコマンドを入力します。

```bash
$ source ~/.bashrc
```
または
```bash
$ source ~/.bash_profile
```

どちらかを入力したら、nodebrewが動くかどうか確認するために、以下のコマンドを入力します。

```bash
$ nodebrew help
```

nodebrew に関する記述が表示されていたらOKです。  
以下は `nodebrew help`を入力した場合の例です。
```
ex)
$ nodebrew help
nodebrew 1.0.1

Usage:
    nodebrew help                         Show this message
    nodebrew install <version>            Download and install <version> (from binary)
    nodebrew compile <version>            Download and install <version> (from source)
    nodebrew install-binary <version>     Alias of `install` (For backword compatibility)
    nodebrew uninstall <version>          Uninstall <version>
    nodebrew use <version>                Use <version>
    nodebrew list                         List installed versions
    nodebrew ls                           Alias for `list`
    nodebrew ls-remote                    List remote versions
    nodebrew ls-all                       List remote and installed versions
    nodebrew alias <key> <value>          Set alias
    nodebrew unalias <key>                Remove alias
    nodebrew clean <version> | all        Remove source file
    nodebrew selfupdate                   Update nodebrew
    nodebrew migrate-package <version>    Install global NPM packages contained in <version> to current version
    nodebrew exec <version> -- <command>  Execute <command> using specified <version>

Example:
    # install
    nodebrew install v8.9.4

    # use a specific version number
    nodebrew use v8.9.4
```

## 4. node.js を nodebrew を使ってインストールする

今回は安定版を入れるため、以下のコマンドを入力します。

```bash
$ nodebrew install-binary stable
```

インストールされているnodeのバージョンを確認します

```bash
$ nodebrew ls

ex)
v8.9.4

current: none
```

使用する node.js のバージョンを指定します。  
例で v8.9.4 にしておりますが、上記の `nodebrew ls` に出てきているバージョンを入力してください。

```bash
$ nodebrew use v8.9.4
```

最後に node.js のバージョンを確認します。

```bash
$ node -v
```

指定したバージョンが表示されたら、無事インストール完了です。