import './Notes.css'
import React from 'react'
import Todo from './Todo'
// Todos: start styling using scss and also adding a feature to change the list color and an
// option to be able to create lists within the notes

const Notes = ({ notesProp, deleteNote }) =>{
    const notesList = notesProp.map((note,index) => {
        return(
        <div key={index} >
            <h1>{note.title}</h1>
            <p>{note.copy}</p>
            <span onClick={() => deleteNote(note)} className="delete">Delete</span>
            <Todo />
        </div> 
        )
    });
    return(
        <div>{notesList}</div>
    )
     
}
export default Notes