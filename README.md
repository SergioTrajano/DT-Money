# <p align = "center"> DT money </p>

<p align="center">
   <img src="https://github.com/SergioTrajano/DT-Money/blob/main/src/assets/Logo.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-SergioTrajano-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/SergioTrajano/DT-Money?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Aplicação para controle financeito. Por meio dela é possível cadastrar novas transações, visualizar as transações cadastradas e o total das transações.

***

## :computer:	 Tecnologias e Conceitos

- Json-server
- Node.js
- TypeScript
- Styled-components
- SPA com react-router-dom

***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [Vite](https://vitejs.dev/guide/), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/SergioTrajano/DT-Money
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Depois, na raiz do projeto, crie um arquivo .env com a URL da APi. Por padrão foi configurado para a API rodar na porta 4568 ao usar o comando abaixo

```
npm run dev:server
```
- Caso não seja possível usar está porta, no arquivo package.json, no script "dev:server", basta alterar o numero depois da flag -p.

Finalizado o processo, é só inicializar o servidor react
```
npm run dev
```
