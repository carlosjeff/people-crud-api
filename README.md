# People CRUD Api

Projeto proposto para demostrar o conhecimento em NestJS construído uma Api de cadastro de pessoas.

Deploy: https://people-crud-api-production.up.railway.app/

## Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

* NPM
* Node
* Banco de Dados MySQL

### Instalação

Clone este repositório usando o comando:
```bash
git clone https://github.com/carlosjeff/people-crud-api.git

```
Na pasta do projeto instale as dependências com uso do npm
```bash
npm install

```
Na arquivo [.env](https://github.com/carlosjeff/people-crud-api/blob/main/.env) edite o dados de conexão com o banco de dados:
```
DATABASE_HOST="Host do banco de dados"
DATABASE_PORT="Porta do banco de dados"
DATABASE_NAME="Nome do banco de dados"
DATABASE_USER="Usuário do banco de dados"
DATABASE_PASSWORD="Senha do banco de dados"
```

Para que a apricação crie as tabelas no banco de dados é precisso que synchronize esteja true no aquivo
[src/app.module.ts](https://github.com/carlosjeff/people-crud-api/blob/main/src/app.module.ts):

```javascript
# Essa configuração não deve ser usada na produção - caso contrário, você poderá perder dados.

 TypeOrmModule.forRoot({
      synchronize: true
    })
```

Para iniciar o servidor é só usar o comando na pasta do projeto:
```bash
npm run start

```

Você deve obter uma resposta com os endpoints disponíveis:

``` json
    {
    "POST": "/api/v1/pessoa",
    "GET": "/api/v1/pessoa/:id",
    "GET": "/api/v1/pessoas",
    "PUT": "/api/v1/pessoa/:id",
    "DELETE": "/api/v1/pessoa/:id"
    }
```

## Construído com

* [NestJS](https://nestjs.com/) - Framework JavaScript
* [TypeORM](https://typeorm.io/) - Object-Relational Mapping (ORM)

## Autor

* **Carlos Jefferson Braga Alves** - [LinkedIn ](https://www.linkedin.com/in/carlosjeff/)


## Licença

Este projeto está sob a licença MIT License - veja o arquivo [LICENSE.md](https://github.com/carlosjeff/people-crud-api/blob/main/LICENSE) para detalhes.
