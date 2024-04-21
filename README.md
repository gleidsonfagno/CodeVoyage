# CodeVoyage

Uma jornada emocionante e exploratória no mundo do código.

<p align="center">
  <img src="https://gifdb.com/images/file/retro-pixel-landscape-background-0g0dpo6tlg0pbmfp.gif" width="100%"/>
</p>

## Sobre

Este repositório contém uma jornada exploratória pelo mundo do código, com foco em tecnologias como Next.js.

## Node.js

```bash
# Listar as versões do Node.js
nvm ls

# Definir a versão do Node.js no arquivo .nvmrc
lts/iron -> v20.11.0 # Versão atual
lts/hydrongn -> 18.19.0 # Versão instável

# Instalar uma versão específica do Node.js
nvm install <versão>
```

## Next.js

```bash
git init

npm install next@13.1.6
npm install react@18.2.0
npm install react-dom@18.2.0
git init

npm install next@13.1.6
npm install react@18.2.0
npm install react-dom@18.2.0

```

## Git e GitHub

```bash
# Inicializar um repositório Git
git init

# Adicionar arquivos ao índice do Git
git add .

# Commitar as mudanças
git commit -m "Mensagem do commit"

# Adicionar um repositório remoto do GitHub
git remote add origin https://github.com/seu-usuario/seu-repositorio.git

# Enviar as mudanças para o GitHub
git push -u origin master

```

## Hospedagem do Site

Este site está hospedado na plataforma Vercel. Para hospedar seu próprio site, siga os passos abaixo:

1. Crie uma conta gratuita na Vercel em [vercel.com](https://vercel.com/).

Acesse o site hospedado em: [CodeVoyage - Vercel](https://code-voyage.vercel.app/)

Este README.md está organizado com as seções sobre o repositório, instruções para Node.js, Next.js, Git e GitHub, e informações sobre hospedagem do site. Espero que seja útil!

## testes altomatizados

[Jestjs](https://jestjs.io/pt-BR/docs/getting-started)

```bash
npm install --save-dev jest

npm run test

npm run test:watch
```

```bash
# packege.json
"test": "jest",
"test:watch": "jest --watch"
```

```bash
psql --host=localhost --username=postgres --port=5432

docker compose up -d --force-recreate

<!-- deletar -->
 docker compose down

<!-- iniciar container -->
docker compose -f infra/compose.yaml up
```
