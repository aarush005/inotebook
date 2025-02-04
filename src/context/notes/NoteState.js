
import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  // Add a note
  const addNote = async (title, description, tag) => {
       // API call
       const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5YzllMTU1ZWI4ZjNiNjViMjAxNDc2In0sImlhdCI6MTczODQwMzQ4Nn0.ogZrQeBicvwv45rtpnEo1BzYQMiVmF3l9OLrmh8sD_s'
        },
        body: JSON.stringify({title, description, tag})
      });
      const note = await  response.json();
  
    setNotes(notes.concat(note))
  }

  // Get a note
  const getNotes = async () => {
       // API call
       const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5YzllMTU1ZWI4ZjNiNjViMjAxNDc2In0sImlhdCI6MTczODQwMzQ4Nn0.ogZrQeBicvwv45rtpnEo1BzYQMiVmF3l9OLrmh8sD_s'
        },
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }

  // Delete a Note
  const deleteNote = async (id) => {
// TODO api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5YzllMTU1ZWI4ZjNiNjViMjAxNDc2In0sImlhdCI6MTczODQwMzQ4Nn0.ogZrQeBicvwv45rtpnEo1BzYQMiVmF3l9OLrmh8sD_s'
      },
    });
    const json =  response.json();
    console.log(json)
    
    console.log("Tried to delete")
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note

  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5YzllMTU1ZWI4ZjNiNjViMjAxNDc2In0sImlhdCI6MTczODQwMzQ4Nn0.ogZrQeBicvwv45rtpnEo1BzYQMiVmF3l9OLrmh8sD_s'
      },
      body: JSON.stringify({title, description, tag})
    });
    const json =  response.json();
    console.log(json)
  
  const newNotes = notes.map((note) => {
    if (note._id === id) {
      return { ...note, title, description, tag };
    }
    return note;
  });
  setNotes(newNotes);
};

return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
    {props.children}
  </NoteContext.Provider>
)
}

export default NoteState