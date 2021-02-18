import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

let reducer = combineReducers({ reducers })

const store = () => {
  return createStore(reducer, composeWithDevTools());
}

export default store();