import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import RequestCard from './RequestCard'
import {getPosts } from '../../js/Actions/postsActions';
import {getUsers} from '../../js/Actions/authActions'


 
const RequestList = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
    // dispatch(getPosts())
     dispatch(getUsers())
    },[])



    const posts=useSelector((state)=>state.PostReducer.posts)
    // console.log("Users",user)
    const usersLoading=useSelector((state)=>state.authReducer.usersLoading)
    const users=useSelector((state)=>state.authReducer.users)
    // console.log('users',users)
    const maxUsersToshow=3;
  return (
    <div>
   { usersLoading ? (<h1>Loading...</h1> ):users.length === 0?("there is no suggestion !!!"):(users.slice(0,maxUsersToshow).map((el)=><RequestCard key={el.id} request={el}/>))}
  
    </div>
  )
}

export default RequestList