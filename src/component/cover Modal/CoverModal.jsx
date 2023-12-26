import React, { useRef } from 'react'
import { pictureProfile } from '../../js/Actions/authActions';
import '../../component/Modal-Post/Modales.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Modal,Form,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {addNewPost} from '../../js/Actions/postsActions'
import {pictureCover} from '../../js/Actions/authActions'

const CoverModal= ({user}) => {
//  console.log("user.picture",user.coverPicture)
//   const[picture,setPicture]=useState(null)
const fileInputRef=useRef(null)

const handilButtonClick=()=>{
  fileInputRef.current.click()
};
  const dispatch=useDispatch();

//   const handilPicture=()=>{
//     const formData=new FormData();
//     formData.append("picture",picture)
//     dispatch(pictureProfile(formData))
//   }
const [coverPicture,setCover]=useState(null)
const handilCover=()=>{
  const formData=new FormData();
  formData.append("coverPicture",coverPicture)
  dispatch(pictureCover(formData))
   }
    
// console.log("picture",user.picture)
    

  return (
    <div>
          
      {/* <Modal show={show} onHide={handleClose} animation={false}>  */}
        <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <Form.Control as="textarea" rows={3} cols={3} /> */}
            {/* <textarea className='text-post' placeholder='De quoi shouhaite vous discuter ?'  onChange={(e)=>setContent(e.target.value)}></textarea> */}
        
          <img src={!user.coverPicture ? "../public/default.jpeg" : `/../public/${user.coverPicture}`} alt="cover-picture" />
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handilCover}>
            change
          </Button>
         
          
          <Button variant="primary" onClick={handilButtonClick}>
            Choose File
          </Button>

          <div>
          <input
           type="file" 
           ref={fileInputRef} 
           onChange={(e)=>setCover(e.target.files[0])}
           style={{ display:'none' }}
           />
          </div>
          {/* <label className="custom-file-button" htmlFor="customFile">
            Choose File
          </label> */}
        
        </Modal.Footer>
        {/* </Modal> */}
    
    </div>
  )
}


export default CoverModal;