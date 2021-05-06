import React from 'react'
import OriginalNote from './OriginalNote'
import Notes from './Notes'

class App extends React.Component{
    state = {notes: []}

    onTitleSubmit = (payload) =>{
        let notesArray = this.state.notes
        notesArray.push(payload)
        this.setState({notes: notesArray})
    }

    // handleNoteDelete = (note) => {
    //     var noteId = note.id;
    //     var newNotes = this.state.notes.filter(function(note) {
    //       return note.id !== noteId;
    //     });
    //     this.setState({ notes: newNotes });
    //   };

    deleteNote = (payload) =>{
        var noteId = payload.id;
        var newNotes = this.state.notes.filter(function(payload) {
            return payload.id !== noteId;
          });
          this.setState({ notes: newNotes });
          console.log(this.state.notes)
    }

    render(){
        return (
            <div>
                <OriginalNote onSubmit={this.onTitleSubmit}/>
                <Notes deleteNote={this.deleteNote} notesProp={this.state.notes}/>
            </div>
        )
    }
}

export default App