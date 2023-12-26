import {ADD_POST,UPDATE_POST,GET_ALL_POST_USER,GET_LOADING,GET_ALL_POSTS,LOAD_COMMENTS, GET_ONE_POST} from '../constante/PostConstatnt'

const initialstate={
    loadComment:false,
    loadPosts:false,
    posts:[]
}

const PostReducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case LOAD_COMMENTS:
            return {...state,loadComment:true}
        case GET_LOADING:
            return {...state,loadPosts:true}
        case ADD_POST:
            return {...state,posts:[...state.posts,...payload],loadPosts:false}           
        case GET_ALL_POST_USER:
            return {...state , posts:payload,loadPosts:false};
        case  GET_ALL_POSTS:
            return {...state , posts:payload,loadPosts:false}  
        case GET_ONE_POST :
            return {...state , posts:state.posts.map((post)=>
                post._id === payload._id ? {...post , Likes: payload.Likes }:  post)}
        // case COUNT_LIKES:
        //     return {...state,posts:payload,loadPosts:false}                 
        default:
           return state;
    }
}
export default  PostReducer;