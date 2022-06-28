import  Axios  from "axios";

const url = "http://localhost:3001/";


export const postData = (data) =>{
    Axios.post(`${url}create`,data ).then((res)=>{
       console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    
}


export const loginUserr = async (data) =>{
    const result = Axios.post(`${url}login`,data).then((res)=>console.log(res.data)).catch((error) => {
        return error;
      });
      return result;
}

export const authenticationUser = async () => {
    const  headers = {
        "x-access-token": localStorage.getItem("token")
    }
    const result = await Axios.get(`${url}isUserAuth`,headers).then((res)=>{console.log(res,"from authentication API call")}).catch(err=>console.log(err))
    return result;

}













































// //For authentication
// const authhenticationApi = ()=>{
//     const  headers = {
//         "x-access-token": localStorage.getItem("token")
//     }
//     return AxiosRequest("http://localhost:3001/isUserAuth","GET",headers,{})
// };











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


