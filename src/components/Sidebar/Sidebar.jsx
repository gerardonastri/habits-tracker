import React from 'react'
import './Sidebar.css'
import {BiSolidDashboard} from 'react-icons/bi'
import {GoGoal} from 'react-icons/go'
import {FaTasks} from 'react-icons/fa'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {IoIosJournal} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'

const Sidebar = ({setShowSidebar, showSidebar}) => {
  return (
    <div className={showSidebar ? 'sidebar show' : 'sidebar'}>
      <h2>John Doe</h2>
      <div className="sidebar__links">
        <a href="/"><BiSolidDashboard /> Dashboard</a>
        <a href="/goals"><GoGoal /> Goals</a>
        <a href="/tasks"><FaTasks /> Tasks</a>
        <a href="/journal"><IoIosJournal /> Journal</a>
        <a href="/habits"><AiOutlineCheckSquare /> Habits</a>
      </div>
      <span className="close" onClick={() => setShowSidebar(false)}>
        <AiOutlineClose/>
      </span>
    </div>
  )
}

export default Sidebar