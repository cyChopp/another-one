import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import {setIsConfetti,setTodoDeleted} from "../redux/confetti-reducer"



import Swal from "sweetalert2/dist/sweetalert2.all.js";
import "sweetalert2/dist/sweetalert2.min.css";
import { connect } from "react-redux";


const TodoDetails = (props,{todo}) => {


  const { dispatch } = useContext(TodoContext);

  const handleClick = () => {
    Swal.fire({
      title: "Did you complete this TODO?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Completed!", "Your TODO has been deleted.", "success");
        props.setTodoDeleted(true)
        
        dispatch({ type: "DELETE_TODO", id: props.todo.id });
      }
    })
       props.setTodoDeleted(false)

  };

  return (
  
   
    <li onClick={handleClick}>
        
      <div className="title">{props.todo.title}</div>
    </li>
  )
}

export default connect(null,{setIsConfetti,setTodoDeleted})(TodoDetails);
