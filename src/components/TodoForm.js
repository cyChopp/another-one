import React, { useContext, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import db from "../firebase";
import styles from "./TodoForm.module.css";
import moment from "moment";
import firebase from 'firebase/app'

import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);

  const { currentUser } = useAuth();

  const [title, setTitle] = useState("");

  const dummy = useRef()


  const hungleSubmit = (e) => {
    e.preventDefault();

    if (currentUser) {
      db.firestore().collection("tasks").doc(currentUser.uid).collection('todos').add({
        todo: title,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        id: uuidv4(),
      });
      
      dummy.current.scrollIntoView({ behavior: "smooth" });

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
