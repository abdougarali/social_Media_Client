import React,{useEffect,useState} from 'react'
import './Poste.css'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux' 
import { addLike,deleteLike,getAllLikes,getOneLike } from '../../js/Actions/LikesActions';
import {countLike, getPostsByID} from '../../js/Actions/postsActions'
import {getAllComment} from '../../js/Actions/CommentActions' 
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import LikeModal from  '../Likes-Modal/LikeModal'
import CommentModal from '../Comment-Modal/CommentModal';
import GetCommentModal from '../Comment-Modal/modalGetsComment'

import Comment from '../Comment-Modal/comment'



const Poste = ({posts}) => {
  // console.log("user",posts)
  const currentUser = useSelector((state)=>state.authReducer.user)
  // console.log("posts",posts)
//   const isLike=()=>{
//     if(posts){
//       {posts.Likes.forEach(element => { element == posts._id ? className:'Like'        
//       });}
//     }
//   }

    // console.log("foundLike",foundLike)
  // if(posts) {
    var count = 0 ;
    for( const like in posts.Likes){
      count++
    }
    // console.log("count : " ,count)
  // }


  const dispatch=useDispatch();
  const handilLike=()=>{
    dispatch(addLike(posts._id))
  }

const getAllLike=()=>{
  dispatch(getAllLikes(posts._id))
  
}
const getPostID = ()=>{
dispatch(getPostsByID(posts._id))
}

//  const getOnelike=()=>{
//   dispatch(getOneLike(posts._id))
//  }

  const [modalShow, setModalShow]=useState(false);
  const [Liked,setLiked]=useState(false) 

    // useEffect(()=>{
    //   getAllLike()
      
    // },[posts])
    // useEffect(()=>{

    // })
  const isPostLikedByCurrentUser = (x) => {
    // console.log(x.Likes.some(like => like.userId === currentUser._id))
    // Check if the current user ID exists in the Likes array of the post
    return x.Likes.some(like => like.userId === currentUser._id);
  };
  // console.log(isPostLikedByCurrentUser())
  // const users=useSelector((state)=>state.authReducer.user)
  // console.log(user)
  // const postId=posts._id
    // const  isLiked=useSelector((state)=>state.LikeReducer.likes)
    // const isLiked=useSelector((state)=>state.LikeReducer.likes)

    // console.log("isLiked",isLiked)

    // const loadLikes=useSelector((state)=>state.LikeReducer.loadLikes)
  return (
    <div>
         
         <div className="Post">
         <div className="Post-author">
          <img src={!posts.userId.picture? "https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" : `/../public/${posts.userId.picture}`} alt='user_profile'/>
          {/* <img src="data:image/jpeg;base64,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" alt="user_profile"/> */}
           <div>
             <h1>{posts.userId.Name}</h1>
              <small>Founder and CEO at Gellelio Group | Angel Investor</small>
              <small> 2hour ago </small>
           </div>
         </div>
         <div>
          <p>{posts.content}</p>
            {!posts.image ? <></> :<img src={`/public/${posts.image}`} alt="post-web-dev" width='100%' />}
         </div>
         <div className="post-stats">
          <div>
            <img onClick={() => setModalShow(true)} src="data:image/jpeg;base64,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" alt="like" />
            <img onClick={() => setModalShow(true)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq4u5ZANEhcH-uBlMJ7ZxRIoTJuhaUAwopA&usqp=CAU" alt="love" />
            <LikeModal show={modalShow} onHide={()=>setModalShow(false)}  posts={posts}/>
            <span onClick={()=>setModalShow(true)} className='Liked-user'>{posts.Likes.length}</span>
          </div>
          <div>
            <GetCommentModal posts={posts}/>
            {/* <span>22 <a href="#"className='Comment'></a></span> */}
          </div>
         </div>
         <div className="post-activity">

            {/* <div className='img-down'>
            <img src="data:image/jpeg;base64,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" alt="user" />
            <ArrowDropDownIcon  className='drow'/>
            </div> */}
         <div >
          <ThumbUpAltIcon onClick={()=>{handilLike(); getPostID()}} className={isPostLikedByCurrentUser(posts) ? 'Like':'disLike'} fontSize='small'/>
          {/* <button onClick={handilLike}>Like</button> */}
          <span onClick={()=>{handilLike(); getPostID()}} className={isPostLikedByCurrentUser(posts) ? 'Like':'disLike'}>Like</span>
          {/* {isPostLikedByCurrentUser(posts) ? (
            <p>You liked this post!</p>
          ) : (
            <button>Like</button>
          )} */}
         </div>
         <div >
          <CommentModal posts={posts}/>
          {/* <CommentIcon fontSize='small'/>
          <span></span> */}
         </div>
         </div>
       </div>

    </div>
  )
}

export default Poste