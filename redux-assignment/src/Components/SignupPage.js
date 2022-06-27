import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { postData } from '../Redux/Actions/getDataActionType'
import EditSignupForm from './EditedSignupForm'

const SignupPage = () => {
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
   const isResponse = useSelector((state)=>state.finalData.isResponse)

   const clickHandler = (e)=>{
      e.preventDefault()
      const finalData = {
         name:values.name,
         email:values.email,
         phone:values.phone,
         country:values.country
      }
      


      dispatch(postData(finalData))

      navigate("/table")

   }




  return (
    <div>

       <form >

       <div>
           <label>Name </label>
           <input name ="name" type = "text" onChange={handleChange}/>
        </div>

        <div>
           <label>Email </label>
           <input name = "email" type = "email" onChange={handleChange}/>
        </div>

        <div>
           <label>Phone </label>
           <input name = "phone" type = "number" onChange={handleChange}/>
        </div>

        <div>
           <label>Country </label>
           <input name = "country" type = "text" onChange={handleChange}/>
        </div>

        <button className='btn btn-danger' onClick={clickHandler}>Submit</button>

       </form>

       
        
    </div>
  )
}

export default SignupPage