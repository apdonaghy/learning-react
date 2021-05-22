import React from 'react'

class OriginalNote extends React.Component{
    state = {title: '', copy: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        let newNote = {
            title: this.state.title,
            copy: this.state.copy,
            todos: [],
            id: Date.now()
        }
        this.props.onSubmit(newNote)
        this.setState({title: ''})
        this.setState({copy: ''})
        this.y.focus()
    }

    render(){
        return(
        <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">Note Title</label>
            <input 
                ref={x => this.y = x }
                name="title" 
                type="text" 
                value={this.state.title} 
                onChange={(e) => this.setState({ title: e.target.value})} 
                />
                <textarea 
                   value={this.state.copy} 
                   onChange={(e) => this.setState({ copy: e.target.value})} 
                />
                <input type="submit" />
        </form>
        )
    }

}

export default OriginalNote