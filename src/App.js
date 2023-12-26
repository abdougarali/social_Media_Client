import { Route, Routes } from 'react-router-dom';
import './App.css';
// import AppNav from './component/AppNav';
import Navbar from './Pages/navBar/Navbar';
import Home from './Pages/Home';
import Doshboard from './Pages/Doshboard';
import Profil from './Pages/profile/Profil';
import{getAuthUser} from './js/Actions/authActions'
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './component/PrivateRoute';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("token")){
      dispatch(getAuthUser())
    }
    
    // eslint-disable-next-line 
  },[])
  // const isAuth=useSelector((state)=>state.authReducer.isAuth)
  return (
    <div className="App">
      {/* <AppNav/>  */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={
        <PrivateRoute>
          <Profil/>
        </PrivateRoute>}/>
        <Route path='/home' element={
        <PrivateRoute>
        <Doshboard/>
        </PrivateRoute>
        }/>
        <Route path='*' element={<img src='https://t3.ftcdn.net/jpg/02/29/46/30/360_F_229463039_B4KwKD6ifdRV8G5S0sqrzBrAfHNzpReq.jpg' alt='404'/>}/>
      </Routes>
      <ToastContainer
position="top-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default App;
