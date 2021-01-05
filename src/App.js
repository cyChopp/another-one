import TodoContextProvider from "./contexts/TodoContext";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { AuthProvider } from "./contexts/AuthContext";

function App() {


  return (
    <div className="App">
    <AuthProvider>
      <TodoContextProvider>
        <NavBar />
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
