import backend from '../apis/backend'



export const todoList = () => {
  return {
    type: 'TODO',
  }
}

// export const get = async () => dispatch => {
//   return {
//     axios.get(`https://garrett-bearer-auth.herokuapp.com/todo`)
//       .then(response => {
//         let data = response.data
//         dispatch(getData(data))
//       })
//   }
// }




export const asyncGetData = () => async dispatch => {
  try {
    const res = await backend.get('/todo')
    dispatch({ type: 'GET', payload: res.data })
  }
  catch (e) {
    console.log(e)
  }
};


export const addItem = (item) => async dispatch => {
  try {
    console.log(`function working, item: ${item}`)
    const res = await backend.post(`/todo`, {
      text: item.text,
      assignee: item.assignee,
      complete: item.complete,
      difficulty: item.difficulty,

    })
    console.log(res)
    dispatch({ type: 'ADDITEM', payload: res.data })
  }
  catch (e) {
    console.log(e)
  }
}

export const deleteItem = (item) => async dispatch => {
  try {
    const res = await backend.delete(`/todo/${item._id}`)
    console.log(res)
    dispatch({ type: 'DELETEONE', payload: res.data.result })
  }
  catch (e) {
    console.log(e)
  }
}
