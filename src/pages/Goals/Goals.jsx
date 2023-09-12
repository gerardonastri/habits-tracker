import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import './Goals.css'
import { axiosReq } from '../../utils/apiCalls'

import {ImCheckboxChecked} from 'react-icons/im'
import {ImCheckboxUnchecked} from 'react-icons/im'

const Goals = () => {

    //sidebar
    const [showSidebar, setShowSidebar] = useState(false)

    const [goals, setGoals] = useState(null)

    useEffect(() => {
        const getGoals = async () => {
        try {
            const res = await axiosReq.get("/goals")
            setGoals(res.data)
        } catch (error) {
            console.log(error);
        }
        }
        getGoals()
    },[])

    const [title, setTitle] = useState("")
    const [target, setTarget] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosReq.post("/goals", {
                title,
                target
            })
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    //update
    const [now, setNow] = useState("")
    const handleUpdate = async (e, id) => {
        e.preventDefault()
        try {
            await axiosReq.put(`/goals/${id}`, {
                now
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
                <h1>Create Goal</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="inputGroup">
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="inputGroup">
                        <label>Target</label>
                        <input type="text" value={target} onChange={(e) => setTarget(e.target.value)} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className="habits__right">
                <h1>Goals</h1>
                <div className="habits__container">
                    {goals?.map(item => (
                        <div className="home__goals-item">
                            <h3>{item.title}</h3>
                            <div className="home__goals-item_flex">
                                <div>
                                   <form className='goals__form' onSubmit={(e) => handleUpdate(e,item._id)}>
                                        <input type="text" placeholder={item.now} onChange={(e) => setNow(e.target.value)} />
                                   </form>
                                    <span>Target: {item.target}</span>
                                </div>
                                <span className={item.completed ? "goal-completed" : "goal-uncompleted"}>
                                    {item.completed ? (
                                        <ImCheckboxChecked />
                                    ) : (
                                        <ImCheckboxUnchecked />
                                    )}
                                </span>
                            </div>
                            <div className="home__goals-item_bar"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Goals