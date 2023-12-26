import {combineReducers} from 'redux'
import authReducer from './authReducer'
import PostReducer from './PostReducer'
import LikeReducer from './LikeReducer'
import RequestReducer from './RequestReducer'
import CommentReducer from './CommentReducer'
 
const rootReducer=combineReducers({authReducer,PostReducer,LikeReducer,RequestReducer,CommentReducer})

export default rootReducer;