import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import styles from './NavBar.module.css'

const NavBar = () => {
    const {todo} = useContext(TodoContext)

    return (
        <div className={styles.navbar}>
            <h1>Galaxy TODO</h1>
            <p>Currently you have {todo.length} TODOs</p>
        </div>
    )
}

export default NavBar
