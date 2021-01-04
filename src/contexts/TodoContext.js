import React, { createContext, useEffect, useReducer, useState } from "react";
import db from "../firebase";
import { todoReducer } from "../reducers/todoReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todo, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("todo");
    return localData ? JSON.parse(localData) : [];
  });

  const [authTodos, setAuthTodos] = useState();

  useEffect(() => {
    db.auth().onAuthStateChanged(function (user) {
      if (user) {
        db.firestore()
          .collection("tasks")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            console.log(snapshot.docs.map((doc) => doc.data(), "ASYNC"));
            setAuthTodos(snapshot.docs.map((doc) =>({ ...doc.data(), todoId: doc.id})));
          });
      } else {
        console.log(todo, "no auth todos");
        localStorage.setItem("todo", JSON.stringify(todo));
      }
    });
  }, [todo]);

  return (
    <TodoContext.Provider value={{ todo, dispatch, authTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
