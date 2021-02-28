import axios from 'axios';
import { useEffect, useState } from 'react';

import { getData } from '../actions/actions'


let initialState = {
  list: [{
    text: '',
    assignee: '',
    difficulty: 1,
    complete: false,
  }]
}

let reducers = (state = [], action) => {
  let { type, payload } = action;
  console.log(action)
  switch (type) {
    case 'TODO':

      return initialState;

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


    default:
      return state;
  }
}

export default reducers;