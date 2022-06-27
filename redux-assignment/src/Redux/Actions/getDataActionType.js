import { actionTypes } from "../Constants/actionTypes";
import {GetApiDetails, PostApiDetails, DeleteApiDetails} from "../../api/apiRequest";

export const getData = () => {
    return async function(dispatch) {
        return GetApiDetails().then((res)=>{
            dispatch(
                {
                    type : actionTypes.GET_DATA,
                    payload : res.data
                })
             })
             }
            };

export const postData = (request) => {
    return async function(dispatch) {
        
        return PostApiDetails(request).then((res)=>{
            dispatch(
                {
                    type : actionTypes.POST_DATA,
                    payload : true
                })
             })
             }
            };


export const deleteData = (id) =>{
    return function (dispatch) {
        dispatch(
            {
                type:actionTypes.DELETE_DETAILS,
                payload: false
            });
    return DeleteApiDetails(id).then((res)=>{
        dispatch({
            type: actionTypes.DELETE_DETAILS,
            payload: true,
        })
    })
    }
}         
            