import React from 'react'

const Notes = props =>{
    const notesList = props.notesProp.map((note) => {
        return <p>{note}</p>
    });
    return(
        <div>{notesList}</div>
    )
     
}

export default Notes