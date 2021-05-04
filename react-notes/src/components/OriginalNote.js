import React from 'react'

class OriginalNote extends React.Component{
    state = {noteTitle:''}


    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.noteTitle)
    }

    render(){
        return(
        <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">Note Title</label>
            <input 
                name="title" 
                type="text" 
                value={this.state.noteTitle} 
                onChange={(e) => this.setState({ noteTitle: e.target.value})} 
                />
        </form>
        )
    }

}

export default OriginalNote