import React from 'react'
import { useSelector } from 'react-redux'
import LeftSideBar from '../component/SideBar/LeftSideBar'
import MainContent from '../component/MainContent/MainContent'
import Profil from './profile/Profil'

const Doshboard = () => {
    const user=useSelector((state)=>state.authReducer.user)
    const isLoading=useSelector((state)=>state.authReducer.isLoading)
  return (
    <div > 
      <LeftSideBar/>   
    </div>
  )
}

export default Doshboard