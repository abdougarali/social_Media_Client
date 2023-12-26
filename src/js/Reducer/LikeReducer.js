import {ADD_LIKE,DLETE_LIKE,GET_ALL_LIKES,GET_ONE_LIKE,LOAD_LIKES} from '../constante/LikesConstatnt'


const initialstate={
  loadLikes:true,
  Likes:[]
}

const LikeReducer=(state=initialstate,{payload,type})=>{
  // console.log(payload)
  switch (type) {
    // case ADD_LIKE:
    //     return {...state,Likes:[...state.Likes,...payload]} 
    case LOAD_LIKES:
      return {...state,loadLikes:true}
    case GET_ONE_LIKE:
      return{...state,likes:payload,loadLikes:false}
    case GET_ALL_LIKES:
      return {...state,Likes:payload,loadLikes:false}   
      // return {...state,oneLike:state.oneLike.push(payload),loadLikes:false}   

        default:
        return state;
  }

}

export default LikeReducer;