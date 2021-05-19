import React from 'react'

class Todo extends React.Component{
    state = {todoItem: ''}

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log("submit")
     } 

     render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <input type="text"/>
            </form>
        </div>
        )
    }
    
}

export default Todo