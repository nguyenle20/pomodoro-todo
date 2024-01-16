import { GET_TODOS, ADD_TODOS, DELETE_TODOS, UPDATE_TODOS } from "../graphql/todos";

const url = "http://localhost:8080/v1/graphql";

export const getData = async(inputValue, limit, offset) =>  {
  return await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_TODOS,
      variables: 
       {
        where: inputValue ? {
          task:{_ilike: `%${inputValue}%`}
        } : {},
        limit,
        offset
      }
    }),
  })
  .then(res => res.json());
}

export const addData = async (addValue) =>
    await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: ADD_TODOS,
        variables: {
          "task" : `${addValue}`
        }
      }),
    })
    .then(res => res.json());


export const removeData = async (id) =>
    await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: DELETE_TODOS,
        variables: {
          "id": `${id}`
        }
      }),
    })
    .then(res => res.json());

export const editData = async (id, editValue) =>
    await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: UPDATE_TODOS,
        variables: {
          "id": `${id}`,
          "task" : `${editValue}`
        }
      }),
    })
    .then(res => res.json());
