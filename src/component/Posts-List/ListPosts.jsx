import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Poste from './Poste'
import { getPosts } from '../../js/Actions/postsActions'

const ListPosts = () => {
    const posts=useSelector((state)=>state.PostReducer.posts)
    const loadPosts=useSelector((state)=>state.PostReducer.loadPosts)
    // console.log(loadPosts)
    // console.log(posts)
    const dispatch=useDispatch()
    const tryGetPosts = async()=>{
      await dispatch(getPosts())
    }
    
    useEffect(()=>{
      tryGetPosts()
      // eslint-disable-next-line
    },[])
  return (
    <div>
    {

    loadPosts?(<h1>loading...</h1>) : posts.length === 0 ? ('there is no data!!!') : (posts.map((el)=><Poste posts={el} key={el._id}/>))
    
    }
    </div>
  )
}

export default ListPosts;