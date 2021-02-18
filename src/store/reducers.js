let initialState = {
  list: [
    { text: 'clean room',
      assignee: 'Garrett', 
      complete: false, 
      difficulty: 3
    },
    { text: 'clean living room',
      assignee: 'Garrett', 
      complete: false, 
      difficulty: 4
    }
  ]
}

let reducers = (state = initialState, action) => {
  console.log(state);
  let { type } = action;
  switch (type) {
    case 'TODO':

    return initialState;

    case 'ADD ITEM':
    
    return { ...state };

    default:
      return state;
  }

}

export default reducers;