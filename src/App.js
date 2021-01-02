import TodoContextProvider from './contexts/TodoContext';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'
import { connect } from 'react-redux';

import { useEffect, useState } from 'react';

import {setTodoDeleted} from './redux/confetti-reducer'



function App(props) {

  const [success,setSuccess] = useState(props.todoDeleted);



  const {width, height} = useWindowSize();

  useEffect(() => {
    setSuccess(props.todoDeleted)
  // setTimeout(()=>{  props.setTodoDeleted(false)},5000)
  }, [props.todoDeleted])

  return (

    <div className="App">
      <TodoContextProvider>
      <NavBar />
      <TodoList />
      <TodoForm/>
    </TodoContextProvider>
    
    </div>

  );
}
const mapStateToProps =(state)=>({
  isConfetti:state.confetti.isConfetti,
  todoDeleted:state.confetti.todoDeleted
  
})
export default connect(mapStateToProps,{setTodoDeleted})(App);
