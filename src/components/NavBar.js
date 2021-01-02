import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const NavBar = () => {
    const {todo} = useContext(TodoContext)

    return (
        <div className='navbar'>
            <h1>Galaxy TODO</h1>
            <p>Currently you have {todo.length} TODOs</p>
        </div>
    )
}

export default NavBar
