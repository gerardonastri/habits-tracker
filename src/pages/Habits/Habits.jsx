import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import './Habits.css'
import { axiosReq } from '../../utils/apiCalls'

const Habits = () => {
    
  //sidebar
  const [showSidebar, setShowSidebar] = useState(false)

  const [habits, setHabits] = useState(null)

  useEffect(() => {
    const getHabits = async () => {
      try {
        const res = await axiosReq.get("/habits")
        setHabits(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getHabits()
  },[])

  const [title, setTitle] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosReq.post("/habits", {
        title,
      })
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="wrapper">
        <Navbar setShowSidebar={setShowSidebar} />
        <div className="habits">
            <div className="habits__left">
                <h1>Create habit</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="inputGroup">
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className="habits__right">
                <h1>Habits</h1>
                <div className="habits__container">
                    {habits?.map(item => (
                        <div className="habits__item">
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Habits