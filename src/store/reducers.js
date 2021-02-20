import { useEffect, useState } from 'react';


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
  

  console.log(state.list)
  let { type, payload } = action;
  console.log(payload)
  switch (type) {
    case 'TODO':
      
      return initialState;
      
      case 'ADDITEM':
      console.log(state)
    console.log(payload)
    return {
      
      ...state,
      list: [...state.list, payload] };

    default:
      return state;
  }
}

export default reducers;