import React from 'react'
import './Home.css';
import Signup from '../component/Register';

const Home = () => {
  return (
    <div>
      <div className="post">
        <Signup/>
      </div>
    </div>
  )
}

export default Home