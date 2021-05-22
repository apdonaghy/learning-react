import React from 'react'

class Todo extends React.Component{
    state = {todoItem: ''}

    onFormSubmit = (event) => {
        event.preventDefault()
       
        let todo = this.state.todoItem
        this.props.onTodoSubmit(todo)
     } 

     render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <input 
             onChange={(e) => this.setState({ todoItem: e.target.value})} 
            type="text"/>
            </form>
        </div>
        )
    }
    
}

export default Todo