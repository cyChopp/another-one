import React, { createContext, useEffect, useReducer, useState } from "react";
import db from "../firebase";
import { todoReducer } from "../reducers/todoReducer";
import { useAuth } from "./AuthContext";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todo, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("todo");
    return localData ? JSON.parse(localData) : [];
  });

  const [authTodos, setAuthTodos] = useState([]);
  const { currentUser } = useAuth();


  useEffect(() => {
    db.auth().onAuthStateChanged(function (user) {
      if (user) {
        db.firestore()
          .collection("tasks")
          .doc(user.uid)
          .collection('todos')
          .orderBy("time","asc")
          .onSnapshot((snapshot) => {
            setAuthTodos(snapshot.docs.map((doc) =>({ ...doc.data(), todoId: doc.id})));
          });
      } else {
        localStorage.setItem("todo", JSON.stringify(todo));
      }
    });
  }, [todo,currentUser]);

  return (
    <TodoContext.Provider value={{ todo, dispatch, authTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
