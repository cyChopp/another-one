import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import db from "../firebase";
import TodoDetails from "./TodoDetails";
import styles from "./TodoList.module.css";

import { v4 as uuidv4 } from "uuid";

const TodoList = (props) => {
  const { todo, authTodos } = useContext(TodoContext);
  const { currentUser } = useAuth();



  return (
    <>
      {/* {authTodos ? (  */}
      <div className={styles.bookList}>
        <ul>
          {currentUser ? (
            authTodos &&
            authTodos.map((todo) => {
              return <TodoDetails todo={todo} key={todo.id} isAuth={true} />;
            })
          ) :
           !currentUser ? (
            todo.map((todo) => {
              return <TodoDetails todo={todo} key={todo.id} isAuth={false} />;
            })
          ) : (
            <div className={styles.empty}>Nothing to do...</div>
          )}
        </ul>
      </div>
      {/* ) : (
        
      )} */}
    </>
  );
};

export default TodoList;
