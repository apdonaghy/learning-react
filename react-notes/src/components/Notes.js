import './Notes.css'
import React from 'react'
import Todos from './Todos'
import Todo from './Todo'
import ContentEditable from 'react-contenteditable'
// Todos: start styling using scss and also adding a feature to change the list color and an
// option to be able to create lists within the notes

// const Notes = ({ notesProp, deleteNote }) =>{
    class Notes extends React.Component{
        state = {copy: ''}
    
    handleReviseNote = (id) => {

        let revisedNote = {
            copy: this.state.copy,
            id: id
        }
        this.props.reviseNote(revisedNote)
        // this.setState({copy: ''})
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
        <div className="mainNote" key={note.id}>
            <h2 className="noteTitle">{note.title}</h2>
            <ContentEditable
                className="noteCopy"
                disabled={false} 
                html={note.copy}
                onChange={(e) => this.setState({ copy: e.target.value})} 
                keyup={this.handleReviseNote(note.id)} 
            />
            <span onClick={() => this.props.deleteNote(note)} className="delete">Delete</span>
           
            <Todo idProp={note.id} onTodoSubmit={this.onTodoSubmit}/>
            <Todos todosProp={note.todos} onDelete={this.onDeleteTodo}/>
            
        </div> 
        )
    });
    
    return(
        <div className="notesDiv">{notesList}</div>
    )
    }
}
export default Notes