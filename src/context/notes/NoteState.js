
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial =[
        {
          "_id": "679df73b4f609ca2bd36850e",
          "user": "679c9e155eb8f3b65b201476",
          "title": "TestTitle",
          "description": "Testdescription",
          "tag": "personal",
          "date": "1738405691347",
          "__v": 0
        },
        {
          "_id": "679df73b4f609ca2bd36850e",
          "user": "679c9e155eb8f3b65b201476",
          "title": "TestTitle",
          "description": "Testdescription",
          "tag": "personal",
          "date": "1738405691347",
          "__v": 0
        },
        {
          "_id": "679df73b4f609ca2bd36850e",
          "user": "679c9e155eb8f3b65b201476",
          "title": "TestTitle",
          "description": "Testdescription",
          "tag": "personal",
          "date": "1738405691347",
          "__v": 0
        },
        {
          "_id": "679df73b4f609ca2bd36850e",
          "user": "679c9e155eb8f3b65b201476",
          "title": "TestTitle",
          "description": "Testdescription",
          "tag": "personal",
          "date": "1738405691347",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

      // Add a note
      const addNote = (title, description, tag)=>{
        // TODO api call
        console.log("Adding a new note")
      const note = {
          "_id": "679df73b4f609ca2bd36850e",
          "user": "679c9e155eb8f3b65b201476",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "1738405691347",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const deleteNote = ()=>{

      }

      // Edit a Note
      const editNote = ()=>{

      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
           {props.children}
       </NoteContext.Provider>
    )
}

export default NoteState