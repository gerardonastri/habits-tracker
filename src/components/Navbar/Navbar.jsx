import React from 'react'
import './Navbar.css'
import { axiosReq } from '../../utils/apiCalls'

const Navbar = ({setShowSidebar}) => {

  const handleClick = async () => {
    try {
      await axiosReq.get("/clean")
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='navbar'>
      <div className="hamburger" onClick={() => setShowSidebar(prev => !prev)}>
        <div className='bar' />
        <div className='bar' />
        <div className='bar' />
      </div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Clean</button>
    </div>
  )
}

export default Navbar