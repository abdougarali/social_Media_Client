import {SEND_REQUEST,DELETE_REQUEST} from '../constante/RequestConstant'
import axios from 'axios'


export const sendRequest=(friendId)=>async(dispatch)=>{
    try {
        
        const config={
            headers:{
                "x-auth-token":localStorage.getItem("token")
            }
        }
        const result=await axios.post(`/api/Request/${friendId}`,null,config)
        // console.log("result",result)
        dispatch({type:SEND_REQUEST,payload:result.data.request})
    } catch (error) {
        console.log(error)
    }
}

export const deleteRequest=(id)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                "x-auth-token":localStorage.getItem('token')
            }
        }
        await axios.delete(`/api/Request/${id}`,config)
        dispatch({type:DELETE_REQUEST})
    } catch (error) {
        console.log(error)
    }
}