import { createStore } from "redux";
import reducers from "./Reducers";
import {applyMiddleware} from 'redux'
import thunk from "redux-thunk";

const store = createStore(reducers,{},applyMiddleware(thunk))

export default store;