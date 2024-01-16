// export default {
//     query: {
//         GET_TODOS: `
//             query getTodos($task: String) {
//                 todos(
//                     order_by: {id: asc},
//                     where: {task: {_ilike: $task}}
//                 ) {
//                 id
//                 task
//                 }
//             } 
//         `
//     },
//     mutation: {
//         INSERT_TODOS: `
//             mutation ($task: String!) {
//                 insert_todos_one(object: { task: $task }) {
//                     id
//                     task
//                 }
//             }
//         `,
//         DELETE_TODOS: `
//             mutation MyMutation2($id: Int!) {
//                 delete_todos_by_pk(id: $id) {
//                 id
//                 task
//                 }
//             }
//         `,
//         UPDATE_TODOS: `
//             mutation updateData($id: Int!, $task: String!) {
//                 update_todos_by_pk(pk_columns: {id: $id}, _set: {task: $task}) {
//                     id
//                     task
//                 }
//             }
//         `
//     }
// }















export const ADD_TODOS = `
    mutation ($task: String!) {
        insert_todos_one(object: { task: $task }) {
            id
            task
        }
    }
`;

export const GET_TODOS = `
    query GET_TODOS($where: todos_bool_exp, $limit: Int  $offset: Int) {
        todos(
        where: $where, 
        order_by: {id: asc}, 
        limit: $limit, 
        offset: $offset
        ) {
        id
        task
        }
        todos_aggregate(where: $where) {
        aggregate {
            count
        }
        }
    }
  
  
`;

export const UPDATE_TODOS = `
    mutation ($id: Int!, $task: String!) {
        update_todos_by_pk(pk_columns: {id: $id}, _set: {task: $task}) {
            id
            task
        }
    }
`;

export const DELETE_TODOS = `
    mutation ($id: Int!) {
        delete_todos_by_pk(id: $id) {
        id
        task
        }
    }
`;