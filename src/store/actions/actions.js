import backend from '../apis/backend'

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
      editing: item.editing

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

export const updateItem = (item) => async dispatch => {
  console.log(item)
  try {
    const res = await backend.put(`/todo/${item._id}`, {
      text: item.text,
      assignee: item.assignee,
      complete: item.complete,
      difficulty: item.difficulty,
      editing: item.editing,
    })
    console.log(res.data)
    dispatch({ type: 'UPDATEPROPERTY', payload: res.data})
  }
  catch (e) {
    console.log(e)
  }
}