import './Notes.css'
import React from 'react'

const Notes = ({ notesProp, deleteNote }) =>{
    const notesList = notesProp.map((note,index) => {
        return(
        <div key={index} >
            <h1>{note.title}</h1>
            <p>{note.copy}</p>
            <span onClick={() => deleteNote(note)} className="delete">Delete</span>
        </div> 
        )
    });
    return(
        <div>{notesList}</div>
    )
     
}

export default Notes