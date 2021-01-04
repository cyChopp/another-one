import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import styles from "./NavBar.module.css";

const NavBar = (props) => {

  const { todo,authTodos } = useContext(TodoContext);
  const { signup, signout, userName, currentUser } = useAuth();

  function handleSignUp(e) {
    e.preventDefault();
    signup();
  }

  function handleSignOut(e) {
    e.preventDefault();
    signout();
  }


  return (
    <div className={styles.navbar}>
      <div className={styles.authWrapper}>
        <div className={styles.currentUsername}>
          <p>User : {userName}</p>
        </div>
        {currentUser ? (
          <button onClick={handleSignOut} className={styles.authButton}>
            Sign out
          </button>
        ) : (
          <button onClick={handleSignUp} className={styles.authButton}>
            Sign up
          </button>
        )}
      </div>
      <h1>Galaxy TODO</h1>
      <p>Currently you have {currentUser ? (authTodos.length) : (todo.length)} TODOs</p>
    </div>
  );
};

export default NavBar;
