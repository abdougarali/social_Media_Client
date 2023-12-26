import {ADD_NEW_COMMENT,DELETE_COMMENT,GET_ALL_COMMENT,LOAD_COMMENT} from '../constante/CommentConstant'
import axios from 'axios'

export const addNewComment=(formData,postId)=>async(dispatch)=>{ 
    try {
        const config={
            headers:{
                "x-auth-token":localStorage.getItem("token")
            }
        }
        const result=await axios.post(`/api/Comment/${postId}`,formData,config)
        dispatch({type:ADD_NEW_COMMENT,payload:result.data.comment})
    } catch (error) {
        console.log(error)
    }
}

export const deleteComment=(postId)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                "x-auth-token":localStorage.getItem("token")
            }
        }
        await axios.delete(`/api/Comment/Delete/${postId}`,config) 
        dispatch({type:DELETE_COMMENT})
    } catch (error) {
        console.log(error)
    }
}
export const getAllComment=(id)=>async(dispatch)=>{
    dispatch(loadComment());
    try {
        const config={
            headers:{
                "x-auth-token":localStorage.getItem("token")
            }
        }
        const result=await axios.get(`/api/Comment/gets/${id}`,config)
        // console.log("result",result.data.findpost)
        dispatch({type:GET_ALL_COMMENT,payload:result.data.findpost})
    } catch (error) {
        console.log(error)
    }
}

export const loadComment=()=>(dispatch)=>{
    dispatch({type:LOAD_COMMENT})

}