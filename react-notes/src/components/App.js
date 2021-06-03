import './app.css'
import React from 'react'
import OriginalNote from './OriginalNote'
import Notes from './Notes'

class App extends React.Component{
    state = {notes: []}

    onTitleSubmit = (payload) => {
        let notesArray = this.state.notes
        notesArray.unshift(payload)
        this.setState({notes: notesArray})
    }

    reviseNote = (payload) => {
        // console.log(payload)

        let notesArray = this.state.notes
        for(let note of notesArray){
            if (note.id === payload.id){
                 note.copy = payload.copy
            }
        }

        // console.log(payload)
  
      this.setState({notes: notesArray})
    //       console.log(this.state.notes)
     
    }

    _updateLocalStorage = () => {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('react-notes', notes);
      };

    addTodo = (payload) => {

    let notesArray = this.state.notes
      for(let note of notesArray){
          if (note.id === payload.id){
                note.todos.unshift(payload)
          }
      }

    this.setState({notes: notesArray})
        console.log(this.state.notes)
    } 

    deleteTodo = (payload) => {

            let revisedNotes = this.state.notes
            for(let note of revisedNotes){
            if(note.id === payload.id){
                for(let todo of note.todos){
                    if( todo.todoId === payload.todoId){
                        note.todos.splice(note.todos.indexOf(todo), 1)
                    }
                }
                
            }
          }

          this.setState({ notes: revisedNotes });
     
    }

    deleteNote = (payload) => {
        let noteId = payload.id;
        const newNotes = this.state.notes.filter(function(note) {
            if(note.id !== noteId){
                return note
            }
            return console.log('deleted')
          });
          this.setState({ notes: newNotes });
          console.log(newNotes)
    }

    componentDidMount() {
        var localNotes = JSON.parse(localStorage.getItem('react-notes'));
        if (localNotes) {
          this.setState({ notes: localNotes });
        }
      }

    componentDidUpdate() {
        this._updateLocalStorage();
    } 

    render(){
        return (
            <div className="bkgrnd">
                <div className="container">
                <h1>notes.</h1>
                <OriginalNote onSubmit={this.onTitleSubmit}/>
                <Notes deleteTodo={this.deleteTodo} reviseNote={this.reviseNote} addTodo={this.addTodo} deleteNote={this.deleteNote} notesProp={this.state.notes}/>
                </div>
            </div>
        )
    }
}

export default App