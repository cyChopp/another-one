import TodoContextProvider from './contexts/TodoContext';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
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

export default App;
