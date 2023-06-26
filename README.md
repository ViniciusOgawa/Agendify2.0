# Agendify

Este é um projeto de uma aplicação de agenda online, onde é possível cadastrar contatos, fazer login e se cadastrar como novo usuário. 
O projeto utiliza React.js como biblioteca principal.

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

Página de login: Permite que os usuários façam login com suas credenciais.\
Página de registro: Permite que novos usuários se registrem na aplicação.\
Página inicial: Após fazer login, os usuários são redirecionados para a página inicial, onde podem visualizar a lista de contatos cadastrados.
  - Lista de contatos: Exibe uma lista de contatos cadastrados pelo usuário.
  - Modal de atualização de contato: Permite ao usuário atualizar as informações de um contato existente.
  - Modal de criação de contato: Permite ao usuário criar um novo contato.
  - Modal de deleção de contato: Permite ao usuário criar um novo contato.
  - Modal de atualização de usuario: Permite ao usuário atualizar suas informações.

## Como executar o Projeto

1. Para inciar este projeto, é necessário instalar a API disponivel nesse outro [projeto](https://github.com/ViniciusOgawa/Agendify-API). Depois disso, é necessário instalar as dependências, que serão utilizadas. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm install

# caso use yarn
yarn
```

2. Execute as migrações do banco de dados:

```bash
# caso use npm
npm run migrate

# caso use yarn
yarn run migrate
```

3. Inicie a aplicação:

```bash
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

4. O serviço estará disponível em http://localhost:3000.

## Bibliotecas utilizadas

A aplicação utiliza as seguintes bibliotecas principais:

React: Biblioteca JavaScript de código aberto para construção de interfaces de usuário.\
Chakra UI: Biblioteca de componentes UI para React com design personalizável e responsivo.\
Axios: Biblioteca para fazer requisições HTTP no navegador e no Node.js.\
Yup: Biblioteca para validação de esquemas JavaScript.
