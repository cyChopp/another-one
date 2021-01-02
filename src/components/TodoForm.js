import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
    const {dispatch} = useContext(TodoContext)

    const [title, setTitle] = useState("");

const hungleSubmit =(e)=>{
    e.preventDefault();
    
    if(title !== ''){
    dispatch({type:'ADD_TODO',todo:{title}})
    setTitle('')
    }

}
    return <form onSubmit={hungleSubmit}>
            <input type="text" value={title}  onChange={e=>setTitle(e.target.value)}/>
            <button type='submit'>Add TODO</button>
        </form>
}

export default TodoForm
