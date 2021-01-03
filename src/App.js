import TodoContextProvider from "./contexts/TodoContext";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { connect } from "react-redux";

import { setTodoDeleted } from "./redux/confetti-reducer";

function App(props) {
  return (
    <div className="App">
      <TodoContextProvider>
        <NavBar />
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isConfetti: state.confetti.isConfetti,
  todoDeleted: state.confetti.todoDeleted,
});
export default connect(mapStateToProps, { setTodoDeleted })(App);
