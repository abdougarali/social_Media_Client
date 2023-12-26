import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllComment} from '../../js/Actions/CommentActions'
import CommentCard from '../../component/commentCardList/CommentCard' 
import {getPosts} from '../../js/Actions/postsActions'
import GetCommentModal from './modalGetsComment'
import Comment from './comment'
const ListCardComment = ({posts}) => {

// console.log("posts",posts)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllComment(posts))
  },[])

// const posts=useSelector((state)=>state.PostReducer.posts)
// console.log("posts",posts)
// const loadComments=useSelector((state)=>state.CommentReducer.loadComment)
const comments=useSelector((state)=>state.CommentReducer.comments)
// console.log("comment",comments)
const loadComment=useSelector((state)=>state.CommentReducer.loadComment)
// console.log("loadComment",loadComment)
  return (
    <div>
      {loadComment?(<h1>loading...</h1>):comments.length==0?("there is no comments"):comments.map((el)=><CommentCard comment={el} key={el.id}/>)}
  {/* {loadComments?(<h1>comment loading...</h1>):posts.map((el)=><Comment post={el} key={el.id}/>)} */}
    </div>
  )
}

export default ListCardComment