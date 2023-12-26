import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {followUnfollow, getUsers} from '../../js/Actions/authActions';

    const RequestCard = ({request}) => {
    // console.log(request)
    // console.log('friendId',request)
    // const [loading,setLoading]=useState(false)
    const dispatch=useDispatch();
       
  // const usersLoading=useSelector((state)=>state.authReducer.usersLoading)
    const handilRequest=()=>{
    // setLoading(true)
    dispatch(followUnfollow(request._id))
    // setLoading(false)
    }
    
// const existId=request.followings.find((el)=>el==request._id)
  return (
    <div>
        <div className="sidebar-people-row">
                <img src={!request.picture ? "https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" : `/../public/${request.picture}`} alt="user-3" />
                <div>
                  <h2>{request.Name}</h2>
                  <p>head on marketing at alibaba</p>
                  {/* <a href="#" onClick={handilRequest} >Connect</a> */}
                  <button onClick={()=>{handilRequest()}}>
                    folow
                  {/* {!existId?'Follow':'UnFollow'} */}
                  </button>
                </div>
              </div>
    </div>
  )
}

export default RequestCard