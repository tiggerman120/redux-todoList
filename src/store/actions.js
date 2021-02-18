


export const todoList = () => {
  return {
    type: 'TODO',
    payload: initialState,
  }
}

export const addItem = () => {
  return {
    type: 'ADDITEM',
    payload: [...state, item]
  }
}


