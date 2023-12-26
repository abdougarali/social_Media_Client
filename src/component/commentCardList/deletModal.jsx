import React, { useState } from 'react'
import './DeletModal.css'

const DeletModal = () => {
    const [isOpen,setIsOpen]=useState(false)


    const OpenModal=()=>{
        setIsOpen(true)
    }
    
    const closeModal=()=>{
        setIsOpen(false)
    }
  return (
    <div>
        <div className="comment-options" onClick={OpenModal}>...</div>
        {isOpen && <div>
            <div className='modal-content'>
            <span className="close" onClick={closeModal}>&times;</span>
            <p id='modalWord'>suprimer</p>
            </div>
           
            </div> }
    </div>
  )
}

export default DeletModal