import React, { useContext, useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import db from "../firebase";
import TodoDetails from "./TodoDetails";
import styles from "./TodoList.module.css";

import { v4 as uuidv4 } from "uuid";

const TodoList = (props) => {
  const { todo, authTodos } = useContext(TodoContext);
  const { currentUser } = useAuth();

  // const dummy = useRef();
  const messagesEndRef = useRef();

  const todoScroll = () => {
   return messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  };

  // const dummyRef = () => {
  //   return dummy.current.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(todoScroll, []);
  // useEffect( todoScroll,[authTodos]);

  return (
    <>
      <div className={styles.bookList}>
        <ul>
          {currentUser ? (
            authTodos &&
            authTodos.map((todo) => {
              return (
                <>
                  <TodoDetails
                    todo={todo}
                    key={authTodos.todoId}
                    isAuth={true}
                  />
                  <div ref={messagesEndRef} />
                </>
              );
            })
          ) : !currentUser ? (
            todo.map((todo) => {
              return (
                <>
                  <TodoDetails
                    todo={todo}
                    key={todo.id}
                    isAuth={false}
                  />
                  <div ref={messagesEndRef} />
                </>
              );
            })
          ) : (
            <div className={styles.empty}>Nothing to do...</div>
          )}
        </ul>
      </div>
    </>
  );
};

export default TodoList;

{
  /* <div className={styles.bookList}>
<ul>
  {currentUser ? (
    authTodos &&
    authTodos.map((todo) => {
      return (
        <>
        <TodoDetails todo={todo} key={authTodos.todoId} isAuth={true} />
        <div ref={messagesEndRef} />
        </>
      )
    })
  ) :
   !currentUser ? (
    todo.map((todo) => {
      return (<>
       <TodoDetails todo={todo} key={todo.id} isAuth={false} /> 
       <div ref={messagesEndRef} />
       </>);
    })
  ) : (
    <div className={styles.empty}>Nothing to do...</div>
  )}
</ul>
</div> */
}
