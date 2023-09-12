import React, {useEffect, useState} from 'react'
import './Journal.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { axiosReq } from '../../utils/apiCalls'

const Journal = () => {

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [text, setText] = useState("")

    //sidebar
    const [showSidebar, setShowSidebar] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await axiosReq.post("/journal", {
          title,
          date,
          text
        })
        window.location.reload()
      } catch (error) {
        console.log(error);
      }
    }

    const [items, setItems] = useState(null)

    useEffect(() => {
      const getJournal = async () => {
        try {
          const res = await axiosReq.get("/journal")
          setItems(res.data)
        } catch (error) {
          console.log(error);
        }
      }
      getJournal()
    })

  return (
    <div className='container'>
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="wrapper">
        <Navbar setShowSidebar={setShowSidebar} />
        <div className="journal">
          <div className="journal__left">
            <h1>Having thoughts? Write it down!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="inputGroup">
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="inputGroup">
                <label>Date</label>
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <textarea value={text} onChange={(e) => setText(e.target.value)} cols="50" rows="20"></textarea>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className="journal__right">
            <h1>Note</h1>
            <div className="journal__right-items">
              {items?.map(item => (
                <a href={`/journal/${item._id}`}>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journal