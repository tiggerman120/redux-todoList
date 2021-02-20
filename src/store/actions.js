


export const todoList = () => {
  return {
    type: 'TODO',
  }
}

export const addItem = (item) => {
  console.log(`function working, item: ${item}`)
  return {
    type: 'ADDITEM',
    payload: item
  }
}


