import React from 'react'
import OriginalNote from './OriginalNote'
import Notes from './Notes'

class App extends React.Component{
    state = {notes: []}

    onTitleSubmit = (payload) =>{
        let notesArray = this.state.notes
        notesArray.push(payload)
        this.setState({notes: notesArray})
        console.log(this.state.notes)
    }

    render(){
        return (
            <div>
                <OriginalNote onSubmit={this.onTitleSubmit}/>
                <Notes notesProp={this.state.notes}/>
            </div>
        )
    }
}

export default App