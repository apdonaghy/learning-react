import React from 'react'

const Todos = ({ todosProp }) =>{

    const todoList = todosProp.map((todo,index) => {
        return(
        <div key={index} >
            <p>{todo}</p>
        </div> 
        )
    });
    
    return(
        <div>{todoList}</div>
    )
}



export default Todos