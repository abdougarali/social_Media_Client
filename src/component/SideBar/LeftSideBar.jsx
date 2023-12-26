import React, { useState,useEffect, useRef } from 'react'
import './LeftSideBar.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addNewPost, getPosts,getAllPosts} from '../../js/Actions/postsActions'
import {pictureCover} from '../../js/Actions/authActions'
import CoverModal from '../../component/cover Modal/CoverModal'
import {Modal}from 'react-bootstrap'
import Modales from '../Modal-Post/Modales'
import ListPosts from '../Posts-List/ListPosts'
import PostList from '../Post-List/PostList'
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const LeftSideBar = () => {
  const [name,setName]=useState("")
  const[content,setContent]=useState("")
  const [image,setImage]=useState(null)

 
  
  const user=useSelector((state)=>state.authReducer.user)
  // console.log("user",user)
  // const posts=useSelector((state)=>state.PostReducer.posts)

  // const posts=useSelector((state)=>state.PostReducer.posts)
  const dispatch=useDispatch();
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(getPosts())
  //   // eslint-disable-next-line
  // },[])
 
  // useEffect(()=>{
  //   dispatch(getAllPosts())
  // },[])

  // const fileInputRef=useRef();
  // const [selectedfile,setSelectedFile]=useState(null);

 

 const handilPost=()=>{ 
//  const status={name,content}
const formData=new FormData();
formData.append("image",image)
formData.append("name",name)
formData.append("content",content)
  dispatch(addNewPost(formData))
 }


 
 

 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);


 const [isShow,setIsShow]=useState(false)
 const closeShow=()=>setIsShow(false)
 const OpenShow=()=>setIsShow(true)
  return (
    <div>
       <div className="Container">
        <div className="Left-sidbar">
             <div className="profile-boxe">
                {/* <Link to='/profile'><img className='cover'src="data:image/jpeg;base64,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" alt="profile_img" width='100%' /></Link> */}
                      <div>
                      
                       <Link onClick={OpenShow}><AddAPhotoIcon className='icon-overlay'/></Link>
                        <Modal show={isShow} onHide={closeShow} animation={false}> 
                        {/* <Modales user={user} /> */}
                        <CoverModal user={user}/>
                        </Modal> 
                        <Link to='/profile' ><img className='cover' src={!user.coverPicture ? `/../public/default.jpeg`: `/../public/${user.coverPicture}`} alt="cover-picture" width='100%' /></Link>
                        </div>
                   
                   {/* <AddAPhotoIcon  style={{ fontSize: 48, color: '#fff', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}/> */}
                   <div className="profile-info">
                   <Link to='/profile'><img src={!user.picture ? "https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" : `/../public/${user.picture}`} alt="profile picture" width='100%' /></Link> 
                   {/* <Link to='/profile'><img src={user.picture} alt="profile picture" width='100%' /></Link> */}
                     <h2>Bonjour {user.Name}</h2>

                       <Link onClick={handleShow}>Ajouter Une Photo</Link>
                        <Modal show={show} onHide={handleClose} animation={false}> 
                        <Modales user={user} />
                        </Modal>
                        <h3>Web devoloper full stack js</h3>
                     <ul>
                        <li>profile views <span>52</span></li> 
                         <li>posts view <span>900</span></li>
                         <li>connection <span>200</span></li>
                     </ul>
                   </div>
                   <div className="sidebar-profile-link">
                    <a href="#"><TurnedInIcon/>My items</a>
                    <a href="#"><WorkspacePremiumIcon/>My premium</a>
                   </div>
             </div>
             <div className="sidbar-activity">
            <a href="#">Groups</a>
            <div className="Span">
            <a href="#">Evennement</a>
             <a href="#" className='add'><AddIcon/></a>
            </div>
             <a href="#">Hachtag</a>
            </div> 
        </div>
 {/* Main-content */}
        <div className="Main-Content">
            <div className="Create-poste">
                <div className="Create-Poste-imput">
                    <img src={!user.picture ? "https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" : `/../public/${user.picture}`} alt="usr_profile_img" />
                    <form action="post" >
                       <textarea rows="2" placeholder='write a post...' value={content}  onChange={(e)=>setContent(e.target.value)}></textarea>
                       {/* <input type="text" placeholder='content...'  /> */}
                       {/* <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} /> */}
                       {/* <input type="file" placeholder='image' value={image} onChange={(e)=>setImage(e.target.files[0])} /> */}
                    </form>
                    {/* <CameraAltIcon fontSize='small' className='logo_post'/> */}
                </div>   
                    <div className="Create-Poste-Link">
                    
                        <li>
                        <label className="custom-file-buttonn" htmlFor="customFile">
                        Choose File
                        </label>

                          <input type="file"  onChange={(e)=>setImage(e.target.files[0])} id="customFile" className='d-none' /></li>
                        <li><a href="#"><VideocamIcon  fontSize='small'className='logo_post'/>Video</a></li>
                        <li><a href="#"><EventNoteIcon fontSize='small' className='logo_post'/>Events</a></li>
                       <li><label className='custom-button' onClick={handilPost}>Post</label></li> 
                        {/* <li><a href="#" className='Post-1' type='file' onClick={handilPost}>Post</a></li> */}
                    </div>
            </div>
            <div className="classer-par">
              <hr/>
              <p>Classer par:<span> Recent <ArrowDropDownIcon  fontSize='small'className='logo_Down'/></span></p>
            </div>         
           {/* <PostList /> */}
           {/* <Posts/> */}
           <ListPosts />
        </div>

{/* side-right */}

        <div className="Right-side">
          <div className="Sidebar-news">
             
            <h3>trending news<span><InfoIcon fontSize='medium'/></span></h3>
            
           
            <a href="#">Hight demand for skilled manpower</a>
            <span>1d ago &middot;10.943 readers</span>

            <a href="#">Hight demand for skilled manpower</a>
            <span>1d ago &middot;10.943 readers</span>

            <a href="#">Hight demand for skilled manpower</a>
            <span>1d ago &middot;10.943 readers</span>

            <a href="#">Hight demand for skilled manpower</a>
            <span>1d ago &middot;10.943 readers</span>

            <a href="#"className='read-more-link'>Read More</a>
          </div>
          <div className="sidebar-add">
            <small>Add</small>
            <p>master the five priciple of web design</p>
               <div>
                <img src={!user.picture ? "https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" : `/../public/${user.picture}`} alt="userProfil-img" />
                {/* <img src="data:image/jpeg;base64,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" alt="userProfil-img" /> */}
                 <img src="data:image/png;base64,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" alt="xiaome_logo" />
               </div>
               <b>brand and demand in xiaome</b>
               <a href="#"className='ad-link'>Learn More</a>
          </div>

          <div className="sidebar-useful-link">
            <a href="#">About</a><br />
            <a href="#">Accessibility</a>
            <a href="#">Help & Center</a>
            <a href="#">Privecy Policy</a>
            <a href="#">More...</a>
          </div>
         {/* <div className="copyRight-msg">
                <img src="https://img.freepik.com/premium-vector/abstract-vl-initials-monogram-logo-design-icon-business-simple-elegant_619996-70.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais" alt="logo" />
                <p>LinkedUp &#169 All right reserved </p>
          </div> */}
        </div>
    </div>
    </div>
  )
}

export default LeftSideBar