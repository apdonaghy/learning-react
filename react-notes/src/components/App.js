import React from 'react'
import OriginalNote from './OriginalNote'
import Notes from './Notes'

class App extends React.Component{
    state = {notes: [], deletedNote: null}

    onTitleSubmit = (payload) =>{
        let notesArray = this.state.notes
        notesArray.push(payload)
        this.setState({notes: notesArray})
        console.log(this.state.notes)
    }

    // handleNoteDelete = (note) => {
    //     var noteId = note.id;
    //     var newNotes = this.state.notes.filter(function(note) {
    //       return note.id !== noteId;
    //     });
    //     this.setState({ notes: newNotes });
    //   };

    deleteNote = (payload) =>{
        console.log(payload)
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