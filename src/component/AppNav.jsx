import React from 'react'
import './AppNav.css'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import{Nav,Navbar,Container} from 'react-bootstrap'
// import Signup from './Register'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../js/Actions/authActions'
// import Search from './Searsh/Search';

const AppNav = () => {
  const isAuth=useSelector((state)=>state.authReducer.isAuth)
  // const user=useSelector((state)=>state.authReducer.user)
   const dispatch=useDispatch();

  const handilLogout=()=>{
      dispatch(userLogout())
  }
  return (
    <div >
         
         
             

          <Navbar bg="light" data-bs-theme="light">
        <Container>
          <img style={{width:"3.5%", borderRadius:"20px"}} src="https://img.freepik.com/premium-vector/abstract-vl-initials-monogram-logo-design-icon-business-simple-elegant_619996-70.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais" alt="logo_VL" />
          <Navbar.Brand  style={{paddingLeft:"10px"}}href="#home">VibeLink</Navbar.Brand>
          <Nav className="me-auto">
            {!isAuth?<Nav.Link ><Link to='/'/></Nav.Link>:<></>}
            {isAuth?<Nav.Link><Link to='/Doshboard'>Doshboard</Link></Nav.Link>:<></>}
          </Nav>
          {isAuth?<Link style={{color:'black'}} to='/home'><HomeIcon/></Link>:<></>}
          {isAuth?<Link style={{color:'black'}} to='/notification'><NotificationsIcon/></Link>:<></>}
          {/* <Search/> */}
        </Container>
         {isAuth?
         <>
         {/* <h3>{user.Name}</h3> */}
        <Link style={{paddingRight:"100px"}} onClick={handilLogout}>LOG OUT</Link> 
        </>
        :
      (  <>
        {/* <Signup/> */}
        <Login/>
        </>)
        }
        
      </Navbar>
    </div>
  )
}

export default AppNav