
import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/apiRequest";

 export default (props) =>{
    const [detailsById, setDetailsById] = useState({});
    const GetDetailsByHooks = (requestedId) => {
        console.log("requested id is ",requestedId)
            return GetDetailsById(requestedId).then((res)=>{
                setDetailsById(res)
            })
        
    
       
    }
    useEffect(()=>{
        GetDetailsByHooks(props);
    },[]);

    return [detailsById]
 }


