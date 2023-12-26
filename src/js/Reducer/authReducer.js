import {USER_LOADING,USER_SIGNUP,USER_LOGIN,USER_LOGOUT,GET_AUTH_USER,GET_ALL_USERS,LOAD_USERS, PICTURE_PROFILE,COVER_PICTURE} from '../constante/AcyionType'

const initialstate={
    token:localStorage.getItem("token"),
    user:null,
    isLoading:true,
    isAuth:false,
    usersLoading:true, // to be contunied
    users:[]
}

 const authReducer=(state=initialstate,{type,payload})=>{
    // console.log("paylo ::: " , payload)
    switch (type) {
        case LOAD_USERS:
            return {...state,usersLoading:true}
        case USER_LOADING:
            return {...state,isLoading:true}
        case USER_LOGIN:
        case USER_SIGNUP:
                localStorage.setItem("token",payload.token)
                // console.log(payload.token)
            return {...state,isLoading:false,isAuth:true,usersLoading:false,...payload}
        case USER_LOGOUT:
                 localStorage.removeItem("token") 
             return {...state,isLoading:false,isAuth:false,user:null,usersLoading:false,token:null}  
        case GET_AUTH_USER:
            return {...state,isLoading:false,isAuth:true,usersLoading:false,...payload} 
        case GET_ALL_USERS:
            return {...state,usersLoading:false,usersLoading:false,users:payload}    
        case PICTURE_PROFILE:
            return {...state , user : {...state.user , picture:payload.picture}}
        case COVER_PICTURE:
            return{...state , user:{...state.user,coverPicture:payload.coverPicture}}  
        default:
            return state;
    }

}

export default authReducer;