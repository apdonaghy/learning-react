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

    _updateLocalStorage = () => {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('react-notes', notes);
      };

    addTodo = (payload) => {

    let notesArray = this.state.notes
      for(let note of notesArray){
          if (note.id === payload.id){
                note.todos.push(payload.todo)
          }
      }

    this.setState({notes: notesArray})


        console.log(this.state.notes)
    } 

    deleteNote = (payload) =>{
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
            <div>
                <OriginalNote onSubmit={this.onTitleSubmit}/>
                <Notes addTodo={this.addTodo} deleteNote={this.deleteNote} notesProp={this.state.notes}/>
            </div>
        )
    }
}

export default App