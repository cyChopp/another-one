import React, { useContext, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import db from "../firebase";
import styles from "./TodoForm.module.css";
import moment from "moment";

import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);

  const { currentUser } = useAuth();

  const [title, setTitle] = useState("");
  const [time, setTime] = useState(
    moment(Date().toLocaleString()).format("Do hh:mm:ss a YYYY")
  );

  const hungleSubmit = (e) => {
    e.preventDefault();

    if (currentUser) {
      db.firestore().collection("tasks").doc().set({
        todo: title,
        timestamp: time,
        id: uuidv4(),
      });
      setTitle("");

    } else {
      if (title !== "") {
        dispatch({ type: "ADD_TODO", todo: { title } });
        setTitle("");
      }
    }
  };
  return (
    <form onSubmit={hungleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={styles.todoButton} type="submit">
        Add TODO
      </button>
    </form>
  );
};

export default TodoForm;
