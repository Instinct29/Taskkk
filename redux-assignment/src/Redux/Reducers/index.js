import { combineReducers } from "redux";
import { getDataReducer } from "./getDataReducer";

const reducers = combineReducers(
    {
        finalData : getDataReducer
    }
)

export default reducers;