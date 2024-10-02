// Controller Controlling ? Functionality of Data based on HTTP methods and REST routing 


const Note = require('../models/note')


//CRUD ---> find(), findByID(), findByIdAndUpdate(), findByIdAndDelete() 



const fetchNotes = async (req,res) => {
    const notes = await Note.find()
    res.json({notes: notes})
}
// ------- [READ]


const fetchNote = async (req, res) => {
    // 1. Get id off the url
    // 2. Find the notes using that id
    // 3. Send response with that note as the payload
    const noteId = req.params.id;
    // ------------------------------(1)
    const note = await Note.findById(noteId);
    // ------------------------------(2)
    res.json({ note: note });
    // ------------------------------(3)
  };
// ------- [READ for id]



const createNote = async (req,res) => {
    const  {title,body} = req.body
    const note = await Note.create({
        title: title,
        body: body
    })
    res.json({note: note})
    
}

// ----- [CREATE]


const updateNote = async (req, res) => {
    // 1.Get the id off the url
    // 2. Get the Data off the Body
    // 3. Find and update note
    // 4. Retrieve updatedNote and send it as a response
  
    const noteId = req.params.id;
    // ------------------------------(1)
    // const title = req.body.title;
    // const body = req.body.body;
  const {title,body} = req.body
    // ------------------------------(2)
    const note = await Note.findByIdAndUpdate(noteId, {
      title: title,
      body: body,
    });
    // ------------------------------(3)
    const updatedNote = await Note.findById(noteId);
    res.json({ note: updatedNote });
    // ------------------------------(4)
  };

// ----- [UPDATE]


const deleteNote = async (req,res) => {
    const noteId = req.params.id;
    await Note.deleteOne({
        _id: noteId
    })
    res.json({success: "Record Deleted"})
};

 


 
// ---- [DELETE]




module.exports = {fetchNotes, fetchNote, createNote, updateNote, deleteNote}