import React from 'react'

const Todos = ({ todosProp, onDelete }) =>{

    const todoList = todosProp.map((todo,index) => {
        return(
        <div key={index} >
            <p>{todo.todo}</p>
            <span onClick={() => onDelete(todo)}>x</span>
        </div> 
        )
    });
    
    return(
        <div>{todoList}</div>
    )
}



export default Todos