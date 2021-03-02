
let reducers = (state = [], action) => {
  let { type, payload } = action;
  console.log(action)
  switch (type) {
    
    case 'ADDITEM':
      let newState = payload
      console.log(newState)
      return [...state, newState]

    case 'DELETEONE':
      console.log(payload)
      
      return state.filter(item => item._id !== payload._id)

    case 'GET':
      console.log(payload)
      return state, payload

    case 'UPDATECOMPLETEPROPERTY':
      console.log(payload)
      return state.map(
           (content, i) => content._id === payload._id ? {...content, complete: !content.complete }
           : content
         )

    default:
      return state;
  }
}

export default reducers;