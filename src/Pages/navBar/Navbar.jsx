import React, { useEffect } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Login from '../../component/Login'
import { useDispatch, useSelector } from 'react-redux'
import {userLogout} from '../../js/Actions/authActions'




const Navbar = () => {
  const isAuth=useSelector((state)=>state.authReducer.isAuth)
  const user=useSelector((state)=>state.authReducer.user)
  // const user=useSelector((state)=>state.authReducer.user)
   const dispatch=useDispatch();
   const navigate=useNavigate();


  const handilLogout=()=>{
      dispatch(userLogout())
      navigate('/')
  }
  // document.addEventListener('DOMContentLoaded',function(){
   useEffect(()=>{
 const profileMenu=document.getElementById('profileMenu')
    const toggelMenu=()=>{
      if(profileMenu){
        profileMenu.classList.toggle('open-menu')
      }
    };

      const toggleClick=document.getElementById("buttonMenu")
      if(toggleClick){
       toggleClick.addEventListener('click',toggelMenu)
      } 
    
      return ()=>{
        if(toggleClick){
          toggleClick.removeEventListener('click',toggelMenu)
        }
      };
    
   });
   






  


  return (
    <div>
        <nav className="navbar">

            <div className="navbar-left">
             <Link to='/profile'><img className='logo_img'  src="https://img.freepik.com/premium-vector/abstract-vl-initials-monogram-logo-design-icon-business-simple-elegant_619996-70.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais" alt="logo_VL" /></Link> 
             {!isAuth?<></>:
                <Link className='icons' to="/home"><HomeIcon/><span>Home</span></Link>}
               {/* <Link className='icons'><p>Home</p></Link>  */}
                
                  
                {/* {isAuth?<>
                <Link className='icons' to='/notification'><NotificationsIcon/><span>Notification</span></Link>
                <a href="/profile"><p>Notification</p></a>
                </>
                :<></>}  */}
            
            </div>
            <div className="navbar-center">
             {isAuth? <div className="search-box">
                {/* <SearchIcon style={{paddingLeft:"10px"}}/> */}
                <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="search-img" />
                <input type="text" placeholder='Search...' />
              </div>:<></>}   
            </div>

            <div className="navbar_right">
              {!isAuth?<><Login/></>:<></>}
              {/* {isAuth?<AccountCircleIcon className='profile_icons'/>:<></>}     */}

              <div className={isAuth?'online':''}>
              {isAuth? <img className='nav-profile-img' src={!user.picture ? "https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" : `/../public/${user.picture}`} alt="profile_img" id='buttonMenu'/>:<></>}
              </div> 
            </div>

          {/* profile drop-down-menu */}
          {isAuth?<div className="profile-menu-wrap" id='profileMenu'>
            <div className="profile-menu">
              <div className="user-info">
                {/* <img src="data:image/jpeg;base64,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" alt="user" /> */}
                 <img src={!user.picture ? "https://i.pinimg.com/736x/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg" : `/../public/${user.picture}`} alt="user-profile" />
                 <div>
                  <h3>{user.Name} {user.LastName}</h3> 
                  <Link to='/profile'>See your profile</Link>
                 </div>
              </div>
              <hr />
              <a href="#" className='profile-menu-link'>
                <FeedbackIcon/>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_OBAddEPntDMzmq_AKzwRPAYjSEK1KvKWA&usqp=CAU" alt="feed-back" /> */}
                <p>Give feedback</p>
              </a>
              <a href="#" className='profile-menu-link'>
                <SettingsIcon/>
                {/* <img src="data:image/jpeg;base64,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" alt="feed-back" /> */}
                <p>setings</p>
              </a>
              <a href="#" className='profile-menu-link'>
                   <HelpIcon/>
                {/* <img src="data:image/png;base64,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" alt="feed-back" /> */}
                <p>Help && support </p>
              </a>
              
                <Link className='profile-menu-link'>


                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPWsQv_a5BajuwqPOhcvG_zFn1txSDryr6w&usqp=CAU" alt="feed-back" />
                <p>display && &ccessibility</p>
                </Link>
                
             

              {/* <a href="#" className='profile-menu-link' > */}
                {isAuth?<Link to='/' className='profile-menu-link' onClick={handilLogout} ><LogoutIcon/>LOG OUT</Link>:<></>}
                
                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAA6Ojr7+/swMDAODg7Pz8+WlpaGhobg4ODd3d3w8PDX19fa2trj4+Ovr6+0tLSmpqYpKSmenp6Pj49ZWVm/v79nZ2d4eHjo6Oju7u4kJCS6urqIiIhLS0tCQkIZGRl2dnZRUVFmZmZdXV02NjY+Pj655hBrAAAEY0lEQVR4nO2d21bbMBBF7dzBgTjkHgIBSvj/TywhXZSisVHs0ZE6Ofu1WZU3uloaebKMEEIIIYQQQgghhBBCCCHkP2Ozm632nV57DvvFQzmOrfOd8SjX5nVSxLb6pDs9qPt9sL6OrXZi+BTG78jqNrZdlg3uwvkdmccW1O9/3+ldxfQr3oILvlPGE7y9Rwjm+TSW4A3G751hHMFNH2YYpxa7oCZ6YhnBcIUUzPMtXHCKFcwf0YJbsGCeT8CGz3DDHLsQv8UL5g9QQ/Awc6ILFNzEEMxnQMNZ9WP0W1P5Xx+AhvKCuz/UeQ0odntZEbe1IY8zI8V+shNrEveuOJGK152vxNeWhWoRdayF0rWX/+JgBpsShW6iv6iSGgpq16YrlD3QL6XnlrJTL0WmcIvuBZiNH8J3hSqELrIKUMzALQY1mI7dokOsGa8xxUgIf9wQzefKLWYUoBgJGipBw4DQUAkaBoSGStAwIDRUgoYBoaESNAwIDZWg4TcKxc0wkKFwdlBpOFncPd13RjdKRYMMCzcisKKY8vMHC51dcZBh9ugUI+87f42t66tUI8rQCfe4F7va/N8faRzBoQyd0wPxENh5GoWwW5Rhtvy3kL34I/eYqL0izDAbfi3jSRxFpNPa1g0VZ/hllMxf5GFSPK1tO9wADbPiz2nsW1Xonhyk3LKhIg3fGS+Xg03lvz6Lhi1rEWxYz9x9mA9a9cWkDEv3Ydo31KQMhQPp9opJGdaE2DVvqGkZ1sTYNVZMyzDbVSs2baiJGcqT/omGk0ZqhnWKzRpqcobqtZieYZ1ik76YoKFyQ03RUFcxSUPVhpqmoaZiooaKDTVVQ71JI1lDtYZ6pmEXR92NunNq8QzD7nL90gHibpP/5Yy+6G+4DHxZ/zz8G6q3YfjL+ufhrehrmJpgnldv2TUyFH4Wmxddww7e4Ec8r4T7GSZYhd43p/wMq7Zq4+J32O9n+Av/+B743ZD0M3zFP74HfvezWIcn7PdD+2Op/fkwxUpUXtPYX5emp6j+bnEB74cX8I5/sjS9TwMm0l4bDvP7peb3vM2fW5g/ezJ/fqh7kp+goflzfPOxGObjaczHRJmPa6uJTWwcCp2Wofn4UvsxwvbjvC3E6hu/b2H+zoz5e0/m766Zv39o/w6p/XvA5u9y27+Pb/+bCva/i8FvmwSEhkrQMCA0VIKGAaGhEjQMCA2VoGFAaKgEDQNi39B+jhL7eWbi5QpCZc8D5XsSYsRR+Z7s5+yC5F0T8/PB8q7Zz51nP/9hZQ5LhaO7LIkclheQh9R+Lln7+YCj5HQGjjNHnvGG2LzcF5Bbve6WWBD0l4U/Ah5stnhDae0fDs9L2LpsqudmdaYxBLPsBiYYLUBXfAEIQKQaPFLIS3BlyniCGeLKfc/vcyThGAQeUsFrNZGhG2Gnxgq2M1NLd3oI47fWeaNWYTxSnxxfS/BS+0e2y9nqsdNrz2G/mJfADQtCCCGEEEIIIYQQQgghhJBU+A2OclmzYRJ3QgAAAABJRU5ErkJggg==" alt="feed-back" /> */}
                {/* <p></p>
              </a> */}
            </div>
          </div>:<></>}

        </nav>
    </div>
  )
}

export default Navbar