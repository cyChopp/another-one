import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import TodoDetails from './TodoDetails'

const TodoList = (props) => {

    const {todo} = useContext(TodoContext)

    return todo.length ? (
            <div className='book-list'>
                <ul>
                    {todo.map(todo=>{
                        return(<TodoDetails todo={todo} key={todo.id} />)
                    })}
                </ul>
            </div>
        ):(
            <div className="empty">Nothing to do...</div>
        )

}

export default TodoList
