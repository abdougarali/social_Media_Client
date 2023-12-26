import{ADD_POST,UPDATE_POST,GET_ALL_POST_USER,GET_LOADING,GET_ALL_POSTS,LOAD_COMMENTS, GET_ONE_POST} from '../constante/PostConstatnt'
import axios from 'axios'
import { getAllLikes } from './LikesActions'
import { LOAD_LIKES } from '../constante/LikesConstatnt'


export const addNewPost=(formData)=>async(dispatch)=>{
    console.log("formData",formData)
    try {
        const config={
            headers:{
                "x-auth-token":localStorage.getItem('token')
            }
        }
        const result=await axios.post('/api/posts/new',formData,config)
        // console.log("result",result)
        dispatch({type:ADD_POST,payload:result.data.post}) 
    } catch (error) {
        console.log(error)
    }

}

export const deletePost=(id)=>async(dispatch)=>{
    try {
        const config={
            headers:{"x-auth-token":localStorage.getItem("token")}
        }
        await axios.delete(`/api/posts/Delete/${id}`,config)
        // console.log(result)
        dispatch(getAllPosts())
    } catch (error) {
        console.log(error)
    }
}

export const updatePost=(formData)=>async(dispatch)=>{
    try {
        const result=await axios.put('/api/posts/update/:id',formData)
        dispatch({type:UPDATE_POST})
    } catch (error) {
        console.log(error)
    }
}

export const getAllPosts=()=>async(dispatch)=>{
try {
    const config={
        headers:{
            "x-auth-token":localStorage.getItem("token")
        }
    }
    dispatch({type:GET_LOADING})
    const result=await axios.get('/api/posts/',config)
    // console.log(result)
    dispatch({type:GET_ALL_POST_USER,payload:result.data.post})
} catch (error) {
    console.log(error)
}

}
export const getPosts=()=>async(dispatch)=>{
    try {
       const config={
        headers:{
            "x-auth-token":localStorage.getItem("token")
        }
       }
         dispatch({type:LOAD_COMMENTS})
         dispatch({type:GET_LOADING})
        const result=await axios.get('/api/posts/All',config)
        // console.log("result",result)
        dispatch({type:GET_ALL_POSTS, payload:result.data.post})

    } catch (error) {
        console.log(error)
    }
}

// export const countLike=(id)=>async(dispatch)=>{
//     const config={
//       headers:{
//         "x-auth-token":localStorage.getItem("token")
//       }
//     }
  
//     const result=await axios.get(`/api/Posts/count/${id}`,config)
//     console.log("result :",result)
//     dispatch({type:COUNT_LIKES,payload:result.data.post})
       
  
//   }

export const getPostsByID=(id)=>async(dispatch)=>{
    try {
        dispatch({type:LOAD_LIKES})
       await dispatch(getAllLikes(id))
       const config={
        headers:{
            "x-auth-token":localStorage.getItem("token")
        }
       }
        //  dispatch({type:LOAD_COMMENTS})
        //  dispatch({type:GET_LOADING})
        const result=await axios.get(`/api/posts/${id}`,config)
        // console.log("result",result)
        dispatch({type:GET_ONE_POST, payload:result.data.post})


    } catch (error) {
        console.log(error)
    }
}