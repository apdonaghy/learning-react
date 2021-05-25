import './Notes.css'
import React from 'react'
import Todos from './Todos'
import Todo from './Todo'
import ContentEditable from 'react-contenteditable'
// Todos: start styling using scss and also adding a feature to change the list color and an
// option to be able to create lists within the notes

// const Notes = ({ notesProp, deleteNote }) =>{
    class Notes extends React.Component{
    state = {copy: '', id: ''}
    
    handleReviseNote = (event) => {
        this.setState({copy: event.target.value})
        console.log(this.state.copy)
    }

    onTodoSubmit = (payload) =>{
        this.props.addTodo(payload)   
    }

    onDeleteTodo =(payload) =>{
        this.props.deleteTodo(payload)
    }

    render(){
    const notesList = this.props.notesProp.map(note => {
        return(
        <div key={note.id}>
            <h2>{note.title}</h2>
            <ContentEditable
                disabled={false} 
                html={note.copy}
                onChange={this.handleReviseNote} 
            />
            <span onClick={() => this.props.deleteNote(note)} className="delete">Delete</span>
            
            <Todos todosProp={note.todos} onDelete={this.onDeleteTodo}/>
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