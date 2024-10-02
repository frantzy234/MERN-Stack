require('dotenv').config()
const cors = require("cors")
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb')
connectToDb()

const notesController = require('./controllers/notesController')


app.use(express.json())

app.use(cors({
    origin:true,
    credentials: true
}))

// CORS: CrossOriginResourceSharing


// ---> [Routes (HTTP)=> GET POST PATCH DELETE]

app.get('/notes', notesController.fetchNotes)
//Retrieve all note in DB

app.get('/notes/:id', notesController.fetchNote)
//Retrieve Specific note in DB 

app.post('/notes', notesController.createNote)
// --> Add a note to DB

app.put('/notes/:id',  notesController.updateNote)
// Edit a exisiting note in DB

app.delete('/notes/:id', notesController.deleteNote)
// Delete a exisiting note in DB 



app.listen(PORT,()=>{
    console.log(`....ServerConnected to PORT: ${PORT}`)
})