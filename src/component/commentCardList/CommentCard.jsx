import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteComment} from '../../js/Actions/CommentActions'
// import DeletModal from './deletModal'
import './CommentCard.css'

const CommentCard = ({comment}) => {

// console.log("comment",comment)

const currentUser=useSelector((state)=>state.authReducer.user)
// console.log("currentUser",currentUser)
    const dispatch=useDispatch();
    const handilDelete=()=>{
     dispatch(deleteComment(comment.postId))
    }


  return (
    <div className='comments-container' >
   <div class="comment-card">
   {/* <DeletModal/> */}
      
    <div class="commenter-info">
        <img src="https://via.placeholder.com/40" alt="Commenter Image"/>
        <span>{comment.userId.Name} {comment.userId.LastName}</span>
    </div>
     <div class="comment-content">
      <div className='content'>{comment.comment}</div>
    <span onClick={handilDelete}>{comment.userId._id===currentUser._id?'supprimer':<></>}</span>
    </div>
 </div>    
  </div>
    
  )
}

export default CommentCard