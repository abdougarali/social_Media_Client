import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllLikes} from '../../js/Actions/LikesActions'
// import AlignItemsList from './LikeCard'
import LikeCard from './LikeCard'

const ListeLikes = ({posts}) => {
    // console.log("posts",posts)
    const dispatch=useDispatch();
    useEffect(()=>{
     dispatch(getAllLikes(posts._id))
    },[])
 
    const loadLikes=useSelector((state)=>state.LikeReducer.loadLikes)
    
    const  Likes=useSelector((state)=>state.LikeReducer.Likes)
            
  
  return (
    <div>
    {loadLikes? (<h1>loading...</h1>):Likes.length==0?('no one like this poste'):Likes.map((el)=><LikeCard like={el} key={el.id} />)}
    </div>
  )
}

export default ListeLikes