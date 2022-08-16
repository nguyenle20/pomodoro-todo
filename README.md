## My Todolist Application
A Todo-list project using 
####
    React + Ant Design as UI and GraphQL, Hasura (PostgresQL) as DB.
Some feature in this application:

* Create  task
* Edit task
* Pagination
* Searching by task key
## How-to-Install

You can using yarn or npm to install dependencies

```js
npm install 
```

or

```js
yarn install 
```

Docker is very easy to use as beginning, that why my Hasura + GraphQL using Docker for setup environment just one line like this and it's ready to go :D
```js
docker compose-up
```

## Hasura DB config
In this repository, i'm using default table name "todos" with two columns "id" and "task". You should connect DB by postgres URL in docker compose file. 

## Material
There some source Im using through this project, you can check it below:

>[Peter Sun - How to build a GraphQL app with Hasura, Postgres, and React](https://dev.to/pmbanugo/how-to-build-a-graphql-app-with-hasura-postgres-and-react-c89)

>[Peter Mbanugo - Creating a Todo App with React, Apollo, and Hasura](https://medium.com/@pysun12/creating-a-todo-app-with-react-apollo-and-hasura-d7d7949db50b)

>[Brian Design - React Todo List App Tutorial - Beginner React JS Project Using Hooks](https://www.youtube.com/watch?v=E1E08i2UJGI)

---

__P.S:__ There a lot of cool resource on the Internet, and feel free to contact me if you have any questions. 