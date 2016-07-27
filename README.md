# DevFest Nordeste 2016

Site do DevFest Nordeste 2016

### Estrutura
##### Desenvolvimento

```
app/
├── fonts/
├── images/
├── scripts/
│   └── main.js
├── styles/
│   └── main.scss
├── apple-touch-icon.png
├── favicon.ico
└── index.html
```

##### Produção

```
dist/
├── fonts/
├── images/
├── scripts/
├── styles/
├── apple-touch-icon.png
├── favicon.ico
└── index.html
```

### Como Utilizar (abra seu terminal/cmd)

```shell

# Instale as dependências (npm)
$ npm install

# Execute o serve temporário
$ gulp serve

# Execute o gulp para gerar o build e .tmp
$ gulp

# Para fazer deploy do dist execute o comando
$ gulp-deploy

# para customizar a mensagem de deploy utilize a flag --m
$ gulp-deploy --m "SUA MENSAGEM"

```
