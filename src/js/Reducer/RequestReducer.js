import {SEND_REQUEST,DELETE_REQUEST} from '../constante/RequestConstant'


const initialstate={
    Requests:[]
}

const RequestReducer=(state=initialstate,{type,payload})=>{
    switch (type) {
        case SEND_REQUEST:
            return{...state,Requests:[...state.Requests,...payload]}
        // case DELETE_REQUEST:
        //     return {...state,}   
         
         
            
    
        default:
           return state;
    }
}
export default RequestReducer;