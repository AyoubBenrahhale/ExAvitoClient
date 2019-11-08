

import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import rootReducer from './Reducer'
import { createOfflineStore } from 'redux-offline';
 import offlineConfig from 'redux-offline/lib/defaults';

const middleware = [thunk]
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store;

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools ){


   store = createStore(combineReducers({rootReducer}),compose(applyMiddleware(...middleware), ReactReduxDevTools));
}else{
   store = createOfflineStore(combineReducers({rootReducer}),compose(applyMiddleware(...middleware)))
   

}





/* 
const store = createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 */
export default store