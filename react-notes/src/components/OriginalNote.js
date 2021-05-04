import React from 'react'

class OriginalNote extends React.Component{
    state = {title: '', copy: ''}


    onFormSubmit = (event) => {
        event.preventDefault();
        let newNote = {
            title: this.state.title,
            copy: this.state.copy
        }
        this.props.onSubmit(newNote)
        this.setState({title: ''})
        this.setState({copy: ''})

    }

    render(){
        return(
        <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">Note Title</label>
            <input 
                name="title" 
                type="text" 
                value={this.state.title} 
                onChange={(e) => this.setState({ title: e.target.value})} 
                />
                <textarea 
                   value={this.state.copy} 
                   onChange={(e) => this.setState({ copy: e.target.value})} 
                />
        </form>
        )
    }

}

export default OriginalNote