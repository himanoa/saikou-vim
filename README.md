# saikou-vim

## 使いかた

1. サーバーを立てます
2. curl ServerIP:Port >> ~/.vimrc
3. vimを起動します

or

1. サーバーを立てます
2. vimを起動します
3. :call execute(system('curl http://ServerIP:Port'))
4. 人権

## URI Params

- tab = expandtab or noexpandtab
- sw = Integer (default 2)
- ts = Integer (default 2)
- encode String (default 'utf-8')
- clipboard String (default 'unnamedplus')
- colorsheme String (default 'default')
