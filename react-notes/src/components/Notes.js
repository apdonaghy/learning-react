import React from 'react'

const Notes = props =>{
    const notesList = props.notesProp.map((note,index) => {
        return(
        <div key={index} >
            <h1>{note.title}</h1>
            <p>{note.copy}</p>
        </div> 
        )
    });
    return(
        <div>{notesList}</div>
    )
     
}

export default Notes