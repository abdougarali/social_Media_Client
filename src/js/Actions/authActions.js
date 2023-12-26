import {
   GET_AUTH_USER,
   USER_LOGOUT,
   USER_LOGIN,
   USER_SIGNUP,
   USER_LOADING,
   GET_ALL_USERS,
   FOLLOW_UNFOLLOW,
   LOAD_USERS,
   PICTURE_PROFILE,
   COVER_PICTURE
} from '../constante/AcyionType'
import axios from 'axios'
import {toast} from 'react-toastify'






const successToast=(msg)=>{
   toast.success(msg,{
       position: "top-left", 
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
       });
}

const errorToast=(msg)=>{

   toast.error(msg,{
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

}





export const userSignup=(formData)=>async(dispatch)=>{
   dispatch(userloading())
 try {
    const result=await axios.post('/api/user/SignUp',formData)
    console.log('error',result.data)
      dispatch({type:USER_SIGNUP,payload:result.data})
      if(result.data.msg){
      successToast(result.data.msg);
      }
 } catch (error) {
    console.log(error)
   //  console.log('err',error.response.data)
    const errors=error.response.data.error
   //  console.log('erros',errors)
   //  console.log('err',errors)

   if(Array.isArray(errors)){
      errors.forEach((err)=>errorToast(err.msg))
   }
   // if(error.response.data.msg){
   //    errorToast(error.response.data.msg);
   // }
    
 }

}


export const userLogin=(formData)=>async(dispatch)=>{
   try {
      dispatch(userloading())
      const result=await axios.post('/api/user/Login',formData)
      console.log(result.data)
   dispatch({type:USER_LOGIN,payload:result.data})
   successToast(result.data.msg)
   } catch (error) {
      console.log(error)
   }
}


export const userLogout=()=>async(dispatch)=>{

dispatch({type:USER_LOGOUT})   
}


export const getAuthUser=()=>async(dispatch)=>{
   dispatch(userloading())
  try {
   const config={
      headers:{"x-auth-token":localStorage.getItem("token")}
   }
   const res=await axios.get('/api/user/User',config)
    dispatch({type:GET_AUTH_USER, payload:res.data})
   //  console.log('data',res.data)
  } catch (error) {
   console.log(error)
  }

}


export const userloading=()=>(dispatch)=>{
   dispatch({type:USER_LOADING})
}
export const loadUsers=()=>(dispatch)=>{
dispatch({type:LOAD_USERS})
}

export const getUsers=()=>async(dispatch)=>{
   // dispatch(userloading())
   dispatch(loadUsers())
   try {
      const config={
         headers:{
            "x-auth-token":localStorage.getItem('token')
         }
      }   
      const result=await axios.get('/api/user/', config)
      // console.log("result",result.data)
      dispatch({type:GET_ALL_USERS,payload:result.data.user})
   } catch (error) {
      console.log(error)
   }
}


export const followUnfollow=(id)=>async(dispatch)=>{
   try {
      const config={headers:{
         "x-auth-token":localStorage.getItem("token")
      }}

      await axios.post(`/api/user/${id}`,null,config)
      dispatch({type:FOLLOW_UNFOLLOW})
      dispatch(getUsers())
   } catch (error) {
      console.log(error)
   }

}

export const pictureProfile=(formData)=> async(dispatch)=>{
   console.log("formData : " ,formData)
   try {
      const config={
         headers:{
            "x-auth-token":localStorage.getItem("token")
         }
      }
      const result=await axios.put('/api/user/newPicture',formData,config)
      // console.log("result",result)
      dispatch({type:PICTURE_PROFILE, payload:result.data.picture})
      
   } catch (error) {
      console.log(error)
   }
}


export const pictureCover=(formData)=> async(dispatch)=>{
   console.log("formData : " ,formData)
   try {
      const config={
         headers:{
            "x-auth-token":localStorage.getItem("token")
         }
      }
      const result=await axios.put('/api/user/newCover',formData,config)
      // console.log("result",result)
      dispatch({type:COVER_PICTURE, payload:result.data.cover})
      
   } catch (error) {
      console.log(error)
   }
}