import React, { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import {  updateData } from '../Redux/Actions/getDataActionType'
import { useParams } from 'react-router-dom'
import GetDetailsByHooks from "../Hooks/getDetailsByHooks"

const EditSignupForm = () => {
   const {id} = useParams();
   console.log("id by useParams is______",id)
   const [values, setValues] = useState({
      name:"",
      email:"",
      phone:"",
      country:""
   })

   

   const navigate = useNavigate()

   const handleChange = (e) => {
      e.preventDefault();
      const {name,value} = e.target;
      setValues(prevValues =>{
         return {  
            ...prevValues,
            [name]:value
         }
      })

   }
   
   const dispatch = useDispatch();

   const [detailsById] = GetDetailsByHooks(id);
   console.log("Details By ID",detailsById)

   useEffect(()=>{
      const data = ()=>{
         if(detailsById.data){
            setValues(detailsById.data)
         }
      }
      data()
   })
   

   const clickHandler = (e)=>{
      e.preventDefault()
      const finalData = {
         name:values.name,
         email:values.email,
         phone:values.phone,
         country:values.country
      }

     // dispatch(updateData(finalData,id))

      navigate("/table")

   }

  


  return (
    <div>

        <h1>Edit you Data</h1>

       <form >

       <div>
           <label>Name </label>
           <input   defaultValue={values.name} name ="name" type = "text" onChange={handleChange}/>
        </div>

        <div>
           <label>Email </label>
           <input defaultValue={values.email}  name = "email" type = "email" onChange={handleChange}/>
        </div>

        <div>
           <label>Phone </label>
           <input defaultValue={values.phone} name = "phone" type = "number" onChange={handleChange}/>
        </div>

        <div>
           <label>Country </label>
           <input defaultValue={values.country} name = "country" type = "text" onChange={handleChange}/>
        </div>

        <button  className='btn btn-secondary' onClick={clickHandler}>Update Details</button>

       </form>

       
        
    </div>
  )
}

export default EditSignupForm;