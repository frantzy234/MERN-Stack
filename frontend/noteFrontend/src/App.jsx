import { useEffect, useState } from 'react'
import axios from 'axios'
//axios > fetch()

import './App.css'

function App() {
  const [notes,setNotes] = useState([])
  //Goal: Make request to Backend localhost:3000/notes ---> GET notes --> save Notes to state  

  const fetchNotes = async() => {
    //1. Make request to DB
    const response = await axios.get("http://localhost:3000/notes")
    const info =  response.data
   await setNotes(info.notes)
   console.log("Note fetched from DB")
   console.log("State Avaliable: NOTES[{}]")
   

  }

  useEffect(()=>{
    fetchNotes()
  },[])
  


  return (
    <>
      
    </>
  )
}

export default App
