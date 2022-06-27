import  Axios  from "axios";
import axios from "axios";

const url = "http://localhost:3001/";


export const postData = (data) =>{
    Axios.post(`${url}create`,data ).then((res)=>{
       console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

export const getData = (data) =>{
    Axios.post(`${url}login`,data).then((res)=>{
        if(!res.data.auth){
            console.log(res.data.auth,"should be true")
        }else{
         localStorage.setItem("token", res.data.token)   
         console.log("Token has been setted ")
        }
     })
}

// export const tryy = async(data) =>{
//     try{
//         await Axios.post(`${url}login`,data)

//     }
    
//dddddd
// }










































export async function AxiosRequest(url,method,headers,params){

    return params?axios({
       url:url, 
       method:method,
       headers:headers,
       data:params,
       timeout:1000
     }) :
    axios({
       url:url, 
       method:method,
       headers:headers,
       data:{},
       timeout:1000
   });
}

//For posting the data into database
const postDataApi = (data)=> {
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest('http://localhost:3001/create',"POST",headers,data)
};

//For authorisation POST request to the database-
const getDataApi = (data)=> {
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest('http://localhost:3001/login',"POST",headers,data)
}

//For authentication
const authhenticationApi = ()=>{
    const  headers = {
        "x-access-token": localStorage.getItem("token")
    }
    return AxiosRequest("http://localhost:3001/isUserAuth","GET",headers,{})
};


export {getDataApi, postDataApi, authhenticationApi} ;








// export const getRecepies = (recepieWord: string): any => {
//     const result = url
//       .get(
//         `/api/recipes/v2?type=public&q=${recepieWord}&app_id=${APP_ID}&app_key=${APP_KEY}`
//       )
//       .then((response) => {
//         return response.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//     return result;
//   };


