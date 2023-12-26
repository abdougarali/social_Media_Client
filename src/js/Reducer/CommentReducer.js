import {ADD_NEW_COMMENT,DELETE_COMMENT,GET_ALL_COMMENT,LOAD_COMMENT} from '../constante/CommentConstant'

const initialstate={
    loadComment:true,
    comments:[]
}

const CommentReducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case LOAD_COMMENT:
            return {...state,loadComment:true}
        case ADD_NEW_COMMENT:
            return {...state,comments:[...state.comments,...payload]}  
        case GET_ALL_COMMENT:
            return {...state,loadComment:false,comments:payload}
    
        default:
            return state
    }
}

export default CommentReducer;