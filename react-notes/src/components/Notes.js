import './Notes.css'
import React from 'react'
import Todos from './Todos'
import Todo from './Todo'
// Todos: start styling using scss and also adding a feature to change the list color and an
// option to be able to create lists within the notes

// const Notes = ({ notesProp, deleteNote }) =>{
    class Notes extends React.Component{
    // state = {todos:[]}

    onTodoSubmit = (payload) =>{
 
    this.props.addTodo(payload)
          
    }

    render(){
    const notesList = this.props.notesProp.map((note,index) => {
        return(
        <div key={index} >
            <h1>{note.title}</h1>
            <p>{note.copy}</p>
            <span onClick={() => this.props.deleteNote(note)} className="delete">Delete</span>
            <Todos todosProp={note.todos}/>
            <Todo idProp={note.id} onTodoSubmit={this.onTodoSubmit}/>
        </div> 
        )
    });
    
    return(
        <div>{notesList}</div>
    )
    }
}
export default Notes