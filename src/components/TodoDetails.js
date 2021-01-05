import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import styles from "./TodoDetails.module.css";

import swal from "sweetalert";
import { connect } from "react-redux";

import useSound from "use-sound";
import { useAuth } from "../contexts/AuthContext";
import db from "../firebase";

const TodoDetails = (props) => {
  const { dispatch } = useContext(TodoContext);
  const { currentUser } = useAuth();

  const handleClick = () => {
    swal({
      title: "Did you complete this TODO?",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "Well done!",
          text: "Your TODO has been deleted!",
          icon: "success",
        });

        if (currentUser) {
          db.firestore()
            .collection("tasks")
            .doc(currentUser.uid)
            .collection("todos")
            .doc(props.todo.todoId)
            .delete();
        } else {
          dispatch({ type: "DELETE_TODO", id: props.todo.id });
        }
      }
    });
  };

  return (
    <li onClick={handleClick}>
      <div className={styles.title}>
        {props.isAuth ? props.todo.todo : props.todo.title}
      </div>
      <span></span>
    </li>
  );
};

export default TodoDetails;
