import React,{useState} from 'react'
import './Register.css'
// import {Modal,Button,Form} from 'react-bootstrap'
import {userSignup} from '../js/Actions/authActions'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
 const dispatch=useDispatch()
    const Navigate=useNavigate();
  // const [show, setShow] = useState(false);
  const [Name,setName]=useState("")
  const [LastName,setLastName]=useState("")
  const [email,setemail]=useState("")
  const [password,setPassword]=useState("")

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // console.log(Name);
 
   const handilRegister=()=>{
    const newuser={Name,LastName,email,password}
      dispatch(userSignup(newuser))
      setName("")
      setLastName("")
      setemail("")
      setPassword("")
      Navigate('/home')
   }  


  return (
    <div className='mainContainerForSignUp'>
      <div className='mainContainer'>
       <div style={{flex:1,marginLeft:150,marginBottom:"170px"}}>
        <p className='logo_text'>Social</p>
        <p className='intro_text'>connect with your family && friend...</p>
       </div>
      <div style={{flex:3}}>
      <p className='createaccountTxt'>Create New Account</p>
         <input className='inputText' type="text"  placeholder='Enter your Name...' onChange={(e)=>{setName(e.target.value)}}/>
         <input  className='inputText' type="text"  placeholder='Enter your LastName...' onChange={(e)=>{setLastName(e.target.value)}}/>
         <input className='inputText'  type="email"  placeholder='Enter your Email...' onChange={(e)=>{setemail(e.target.value)}}/>
         <input  className='inputText' type="password"  placeholder='Enter your passworfd...' onChange={(e)=>{setPassword(e.target.value)}}/>
          <button className='btnforSignUp' onClick={handilRegister}>Sign up</button>
          {/* <button className='btnforSignUp' onClick={handilRegister}>Log In</button> */}
        {/* <p style={{textAlign:"start",marginLeft:"30%"}}>alredy have account</p> */}
        
      </div>
      </div>
    </div>
  )


//   <Button variant="primary" onClick={handleShow}>
//   SIGNUP
// </Button>

// <Modal show={show} onHide={handleClose}>
// <Modal.Header closeButton>
// <Modal.Title>Modal heading</Modal.Title>
// </Modal.Header>
// <Modal.Body>
// <Form.Group className="mb-3" controlId="formBasicEmail">
// <Form.Label>Name</Form.Label>
// <Form.Control type="text" placeholder="Enter your Name..."  onChange={(e)=>{setName(e.target.value)}}/>
// <Form.Group className="mb-3" controlId="formBasicEmail">
// <Form.Label>LastName</Form.Label>
// <Form.Control type="text" placeholder="Enter your LastName" onChange={(e)=>{setLastName(e.target.value)}}/>
// </Form.Group>
// </Form.Group>
// <Form.Group className="mb-3" controlId="formBasicEmail">
// <Form.Label>Email address</Form.Label>
// <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{setemail(e.target.value)}}/>
// </Form.Group>
// <Form.Group className="mb-3" controlId="formBasicEmail">
// <Form.Label>Password</Form.Label>
// <Form.Control type="password" placeholder="Password..." onChange={(e)=>{setPassword(e.target.value)}}/>
// </Form.Group>
// </Modal.Body>

// <Modal.Footer>
// <Button variant="secondary" onClick={handleClose}>
//  Close
// </Button>
// <Button variant="primary" onClick={()=>{handilRegister();handleClose()}}>
//  Signup
// </Button>
// </Modal.Footer>
// </Modal>


}

export default Signup;