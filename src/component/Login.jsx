import React,{useState} from 'react'
import './Login.css'
import {Modal,Button,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {userLogin} from '../js/Actions/authActions'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Login = () => {
 const dispatch=useDispatch()
 const Navigate=useNavigate();
    
  const [show, setShow] = useState(false);
//   const [Name,setName]=useState("")
//   const [LastName,setLastName]=useState("")
  const [email,setemail]=useState("")
  const [password,setPassword]=useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(Name);
 
   const handilLogin=()=>{
    const userCreadential={email,password}
      dispatch(userLogin(userCreadential))
      setemail("")
      setPassword("")
      Navigate('/home')
   }  


  return (
    <div>
         {/* <Button variant="primary" > */}
          <Link className='link_login' onClick={handleShow}>LOGIN</Link>
             
          {/* </Button> */}
            
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name..."  onChange={(e)=>{setName(e.target.value)}}/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Enter your LastName" onChange={(e)=>{setLastName(e.target.value)}}/>
      </Form.Group>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{setemail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password..." onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handilLogin();handleClose()}}>
           Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Login;