import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllLikes} from '../../js/Actions/LikesActions'
// import AlignItemsList from './LikeCard'
// import LikeCard from './LikeCard'
import LikesCard from './LikesCrad'

const ListLikesProfile = ({post}) => {
    // console.log("posts",posts)
    const dispatch=useDispatch();
    useEffect(()=>{
     dispatch(getAllLikes(post._id))
    },[])
 
    const loadLikes=useSelector((state)=>state.LikeReducer.loadLikes)
    // console.log("loadLikes",loadLikes)
    const  Likes=useSelector((state)=>state.LikeReducer.Likes)

    console.log("Likes",Likes.length)

  return (
    <div>
    {loadLikes? (<h1>loading...</h1>):Likes.length==0?('no one like this poste'):Likes.map((el)=><LikesCard like={el} key={el.id} />)}
    </div>
  )
}

export default ListLikesProfile;