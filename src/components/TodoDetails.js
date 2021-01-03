import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { setIsConfetti, setTodoDeleted } from "../redux/confetti-reducer";
import styles from './TodoDetails.module.css'

import swal from "sweetalert";
import { connect } from "react-redux";

import useSound from "use-sound";

const TodoDetails = (props, { todo }) => {
  const [
    playActive,
  ] = useSound(
    "http://www.vertigogaming.org/downloads/svencoop/sound/sc_royals/blade.wav",
    { volume: 0.25 }
  );

  const { dispatch } = useContext(TodoContext);

  const handleClick = () => {
    swal({
      title: "Did you complete this TODO?",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title:"Well done!",
          text:"Your TODO has been deleted!",
          icon: "success",
        });

        props.setTodoDeleted(true);
        
        playActive();

        dispatch({ type: "DELETE_TODO", id: props.todo.id });
      }
    });

    props.setTodoDeleted(false);
  };

  return (
    <li onClick={handleClick}>
      <div className={styles.title}>{props.todo.title}</div>
    </li>
  );
};

export default connect(null, { setIsConfetti, setTodoDeleted })(TodoDetails);
