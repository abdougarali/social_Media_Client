import React, { useRef } from 'react'
import { pictureProfile } from '../../js/Actions/authActions';
import './Modales.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Modal,Form,Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {addNewPost} from '../../js/Actions/postsActions'


const Modales = ({user}) => {
//  console.log("user.picture",user)
  const[picture,setPicture]=useState(null)
// console.log("picture:",picture)


const FilInputRef=useRef(null)

const handilButtonClick=()=>{
  FilInputRef.current.click()
};
  const dispatch=useDispatch();

  const handilPicture=()=>{
    const formData=new FormData();
    formData.append("picture",picture)
    // console.log("formData",formData)
    dispatch(pictureProfile(formData))
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
        
          <img src={!user.picture? "https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" :`/../public/${user.picture}`} alt="profile-picture" width='100%' />
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handilPicture}>
            change
          </Button>
         
          <Button onClick={handilButtonClick}>Choose File</Button>
          <input
           type="file"
           ref={FilInputRef} 
           onChange={(e)=>setPicture(e.target.files[0])} 
           className="d-none"/>         
          {/* </Button> */}
        </Modal.Footer>
        {/* </Modal> */}
    
    </div>
  )
}


export default Modales