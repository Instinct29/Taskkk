import axios from "axios";




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

//for Creating and Reading the Data here we are using "GET"
const GetApiDetails = ()=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details","GET",headers,{})
};

//For Posting the data into server
const PostApiDetails = (data)=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details","POST",headers,data)
};

//For getting the whole data
const GetDetailsById = (id)=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details/"+id,"GET",headers,{})
};

//for updating the Data

const UpdateApiDetails = (data,  id)=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details/"+id,"PUT",headers,data)
};



const DeleteApiDetails = (id)=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details/"+id,"DELETE",headers,{})
};



export {GetApiDetails, PostApiDetails, GetDetailsById, UpdateApiDetails, DeleteApiDetails} ;






