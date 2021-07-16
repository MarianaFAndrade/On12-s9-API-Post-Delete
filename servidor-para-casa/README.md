
# API REST DE CONTATOS

Demandas de negócio

- Rota principal pra visualizar a apresentação do projeto
- Visualizar todos os contatinhos
- Visualizar os contatinhos por nome
- Vsualizar os contatinhos por id
- Adicionar novo contatinho
- Deletar contatinhos

## API Reference

#### Get all items

```http
  GET /contatos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Contatos` | `String` | **Required**. contatos |

#### Get name

```http
  GET /contatos/nome
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Nome`      | `String` | **Required**. Contacts names |

#### Get Id

```http
  GET /contatos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `Number` | **Required**. Id of item |

#### Add Contacts

```http
  POST /contatos/cadastrar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Cadastrar`      | `String` | **Required**. Add name, cell and instargram |

#### Delete Contacts

```http
  DELETE /contatos/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `Number` | **Required**. Delete contacts by Id |
