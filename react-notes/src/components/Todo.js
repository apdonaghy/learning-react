import './todo.css'
import React from 'react'

class Todo extends React.Component{
    state = {todoItem: ''}

    onFormSubmit = (event) => {
        event.preventDefault()

        let todoItem2 = {
            todo: this.state.todoItem,
            id:this.props.idProp,
            todoId: Date.now()
        }
        this.props.onTodoSubmit(todoItem2)
        this.setState({todoItem: ''})
     } 

     render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <input 
             className="noteInput"
             onChange={(e) => this.setState({ todoItem: e.target.value})} 
             value={this.state.todoItem} 
             placeholder="+"
             type="text"/>
            </form>
        </div>
        )
    }
    
}

export default Todo