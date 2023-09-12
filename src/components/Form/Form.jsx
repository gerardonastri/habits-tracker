import React, { useState } from 'react'
import './Form.css'
import {axiosReq} from '../../utils/apiCalls'

const Form = ({showForm, setShowForm}) => {

    const [title, setTitle] = useState("")

    const handleSubmit = async () => {
      try {
        await axiosReq.post("/tasks", {
          title: title
        })
        window.location.reload()
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className={showForm ? 'form show' : 'form'}>
      <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label>Title</label>
            <input type="text" placeholder='workout for 1 hour' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Form