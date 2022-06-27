import {actionTypes} from '../Constants/actionTypes'

 
const initialState = {
    data : [],
    isDeleteResponse: false
    
    
}
   
export const getDataReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case actionTypes.GET_DATA:
            return {...state, data: payload}

        case actionTypes.POST_DATA:
            return {
                ...state
            }
        
        case actionTypes.DELETE_DETAILS:
            return{
                ...state,
                data: payload
            }  

     
        default :
            return state

        
    }

}



