import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';


let reducer = combineReducers({  reducers })

const store = () => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();