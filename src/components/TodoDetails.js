import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const TodoDetails = ({todo}) => {
    const {dispatch} = useContext(TodoContext);

    return (
            <li onClick={()=>dispatch({type:'DELETE_TODO',id:todo.id})}>
                <div className="title">{todo.title}</div>
            </li>
    )
}

export default TodoDetails
 