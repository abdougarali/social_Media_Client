import React from 'react'
import { useSelector } from 'react-redux'
import Posts from '../Posts/Posts'
const PostList = () => {
    const posts=useSelector((state)=>state.PostReducer.posts)
    // console.log("length",posts.length)
    const loadPosts=useSelector((state)=>state.PostReducer.loadPosts)
    // const postCount=useSelector((state)=>state.posts.length)
    // if(!postCount){
    //   return (<div>loading...</div>)
    // }
    
  return (
    <div>

        
        { loadPosts? (<h1>loading...</h1>):posts.length ===0 ?("there is no data!!!") :( posts.map((el)=><Posts post={el} key={el.id} />))}
        
    </div>
  )
}

export default PostList