import React, { useEffect, useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import {ImCheckboxChecked} from 'react-icons/im'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {AiOutlinePlus} from 'react-icons/ai'
import {axiosReq} from '../../utils/apiCalls'

import bgImg from '../../images/bg1.jpg'
import Form from '../../components/Form/Form'

const Home = () => {

  const [goals, setGoals] = useState(null)
  const [habits, setHabits] = useState(null)
  const [tasks, setTasks] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosReq.get("/data")
        setGoals(res.data.goals)
        setHabits(res.data.habits)
        setTasks(res.data.tasks)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])


  const handleUpdate = async (el, id) => {

    if(el === 'tasks'){
      await axiosReq.put(`/tasks/${id}`)
      window.location.reload()
    } else {
      await axiosReq.put(`/habits/${id}`)
      window.location.reload()
    }
  }


  // const goals = [
  //   {
  //     title: "Close 200k in first quarter",
  //     target: "$200k",
  //     now: "$250k",
  //     completed: true,
  //     perc: "100%"
  //   },
  //   {
  //     title: "run a half marathon by 2024",
  //     target: "2000 miles",
  //     now: "1000 miles",
  //     completed: false,
  //     perc: "50%"
  //   },
  //   {
  //     title: "write a book in 6 months",
  //     target: "100",
  //     now: "87",
  //     completed: false,
  //     perc: "87%"
  //   }
  // ]

  // const tasks = [
  //   {
  //     title: "Walk for 30 minutes",
  //     completed: false
  //   },
  //   {
  //     title: "Walk for 30 minutes",
  //     completed: false
  //   },
  //   {
  //     title: "Walk for 30 minutes",
  //     completed: false
  //   },
  //   {
  //     title: "Walk for 30 minutes",
  //     completed: false
  //   },
  //   {
  //     title: "Walk for 30 minutes",
  //     completed: false
  //   },
  //   {
  //     title: "Walk for 30 minutes",
  //     completed: false
  //   }
  // ]

  // const habits = [
  //   {
  //     title: "Skin care",
  //     completed: false
  //   },
  //   {
  //     title: "eat 4000 kcal",
  //     completed: false
  //   },
  //   {
  //     title: "drink 4l",
  //     completed: false
  //   },
  //   {
  //     title: "read 20 minutes",
  //     completed: false
  //   },
  //   {
  //     title: "not use phone for first 45 minutes",
  //     completed: false
  //   }
  // ]

  const [showForm, setShowForm] = useState(false)

  //sidebar
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='container'>
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="wrapper">
        <Navbar setShowSidebar={setShowSidebar} />
        <div className="home" style={{backgroundImage: `url(${bgImg})`}}>
          
          {/* GOALS  */}
          <div className="home__goals">
            {goals?.map(item => (
              <div className="home__goals-item">
                <h3>{item.title}</h3>
                <div className="home__goals-item_flex">
                  <div>
                    <h2>{item.now}</h2>
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
          {/* TASKS  */}
          <div className="home__tasks">
            <div className="home__tasks-up">
              <h2>TASKS FOR TODAY</h2>
              <button onClick={() => setShowForm(true)}><AiOutlinePlus /> New Task</button>
            </div>
            <div className="home__tasks-items">
              {tasks?.map(item => (
                <div>
                  <span className={item.completed ? "task-completed" : "task-uncompleted"}>
                    {item.completed ? (
                      <ImCheckboxChecked />
                    ) : (
                      <ImCheckboxUnchecked onClick={() => handleUpdate("tasks", item._id)} />
                    )}
                  </span>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* HABITS  */}
          <div className="home__habits">
            <h2>HABITS</h2>
            <div className="home__tasks-items">
              {habits?.map(item => (
                <div>
                  <span className={item.completed ? "task-completed" : "task-uncompleted"}>
                    {item.completed ? (
                      <ImCheckboxChecked />
                    ) : (
                      <ImCheckboxUnchecked onClick={() => handleUpdate("habits", item._id)} />
                    )}
                  </span>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <Form showForm={showForm} setShowForm={setShowForm} />
          <div className={showForm ? 'overlay show' : "overlay"} onClick={() => setShowForm(false)} />
        </div>
      </div>
    </div>
  )
}

export default Home