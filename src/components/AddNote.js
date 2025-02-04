import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"", description:  "", tag:""})
    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:  "", tag:""})
    }

    const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className='container smy-3'>
    <h1>Add a Note</h1>
    <form>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" value={note.title} name='title' id="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                
        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" value={note.description} name='description' id="description" onChange={onChange} minLength={5} required />
        </div>

        <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" value={note.tag} name='tag' id="tag" onChange={onChange} />
        </div>   
        
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </form>
    
</div>
  )
}

export default AddNote