import {ADD_LIKE,DLETE_LIKE,GET_ALL_LIKES,GET_ONE_LIKE,LOAD_LIKES} from '../constante/LikesConstatnt'
import axios from 'axios'


export const addLike=(postId,userId)=>async(dispatch)=>{
  // console.log("postId :" , postId)
  try {
    const config={
      headers:{
        "x-auth-token":localStorage.getItem("token")
      }
    }
    // console.log(config.headers)
    const result=await axios.post(`api/Likes/${postId}`,null,config)
    // console.log("result",result)
  dispatch({type:ADD_LIKE,payload:userId})
  // console.log("Likes",result.likes)
  } catch (error) {
    console.log(error)
  }
} 

export const deleteLike=(postId)=>async(dispatch)=>{
    try {
      const config={
        headers:{
          "x-auth-token":localStorage.getItem("token")
        }
      }
        const result=await axios.delete(`/api/Likes/${postId}`,config)
         dispatch({type:DLETE_LIKE})
    } catch (error) {
        console.log(error)
    }
}



export const getAllLikes=(id)=>async(dispatch)=>{

  const config={
    headers:{
      "x-auth-token":localStorage.getItem("token")
    }
  }
   dispatch({type:LOAD_LIKES})
    try {
        const result=await axios.get(`/api/Likes/${id}`,config)
        console.log("result",result.data)
    dispatch({type:GET_ALL_LIKES,payload:result.data.like})
    } catch (error) {
        console.log(error)
    }
}


// export const LikeStatus=(id)=>async()=>{
//   try {
//     const config={
//       headers:{"x-auth-token":localStorage.getItem("token")}
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getOneLike=(id)=>async(dispatch)=>{

try {
  const config={
    headers:{
      "x-auth-token":localStorage.getItem("token")
    }
  }

  const result=await axios.get(`/api/Likes/one/${id}`,config)
  // console.log("result",result)
  dispatch({type:GET_ONE_LIKE,payload:result.data})
} catch (error) {
  console.log(error)
}

}
