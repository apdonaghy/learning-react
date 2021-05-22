import React from 'react'

class Todo extends React.Component{
    state = {todoItem: ''}

    onFormSubmit = (event) => {
        event.preventDefault()

        let todoItem = {
            todo: this.state.todoItem,
            id:this.props.idProp
        }
        this.props.onTodoSubmit(todoItem)
        this.setState({todoItem: ''})
     } 

     render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <input 
             onChange={(e) => this.setState({ todoItem: e.target.value})} 
             value={this.state.todoItem} 
            type="text"/>
            </form>
        </div>
        )
    }
    
}

export default Todo