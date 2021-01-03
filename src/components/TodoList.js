import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoDetails from "./TodoDetails";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
  const { todo } = useContext(TodoContext);

  return todo.length ? (
    <div className={styles.bookList}>
      <ul>
        {todo.map((todo) => {
          return <TodoDetails todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className={styles.empty}>Nothing to do...</div>
  );
};

export default TodoList;
