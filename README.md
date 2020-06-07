![Logomarca Ecoleta](./src/assets/images/logo.svg)

[![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

![Imagem Home](./.github/home.png)

### O **Ecoleta** é uma aplicação Web e Mobile para ajudar pessoas a encontrarem pontos de coleta para reciclagem.

Essa aplicação foi construída na trilha **Booster** da **Next Level Week** distribuída pela **[Rocketseat](https://rocketseat.com.br/)** :rocket: . A ideia de criar uma aplicação voltada ao meio ambiente surgiu da coincidência da data do curso e a data da semana do meio ambiente.

Recicle! O meio ambiente agradece! ♻️

> Encontre a **Api** desta aplicação [aqui](https://github.com/luanribeiros/ecoleta-api) e o **Mobile** [aqui](https://github.com/luanribeiros/ecoleta-mobile)

Tecnologias utilizadas:

- A trilha utilizou create-react-app, mas eu usei o Wepack 4+ and Webpack Dashboard, só a nível de treino e estudos mesmo, configurado do zero **_(Extras)_**:
  - Webpack 4+
  - Webpack Dashboard
  - HTML e CSS gerado automaticamente
  - React 16+
  - Typescript
  - Prettier
  - Style guide Eslint (Airbnb)
  - Husky com `pre-commit`
  - Hot Module Replacement
  - Babel
  - Ambiente de Desenvolvimento e Produção configurado por arquivos separados
- Axios
- LeafFlet Map
- React LeaFlet Component
- React Router Dom
- IBGE Api
- React Dropzone

## Dependências:

- Node.js `>=` v12.16.1;

## Como executar

- Clone este repositório: `git clone git@github.com:luanribeiros/ecoleta.git`;
- Remova `.git` directory;
- Instale as dependências: `yarn` (ou `npm install`);
- Execute yarn `(ou`npm start`) para ambiente de desenvolvimento na porta`http://localhost:3000`
- Execute `yarn build` (ou `npm run build`) para build de produção (or arquivos vão ser gerados no diretório `build-prod`)

## Referências da API

[Api IBGE](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-_)

- Municípios por UF: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

- UFs: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet

## Base de Dados

Consumindo [api](https://github.com/luanribeiros/ecoleta-api) com o database sqlite

## Licença

[MIT](https://github.com/luanribeiros/ecoleta-api/blob/master/LICENSE.md) &copy; Luan Ribeiro
