import { createContext, useContext, useEffect, useState } from "react";
import db from "../firebase";
import firebase from "firebase";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userName, setUserName] = useState();
  const [todos,setTodos] = useState()

  function signup() {

    const provider = new firebase.auth.GoogleAuthProvider();

    db.auth().signInWithPopup(provider) // more for mobile

    // db.auth().signInWithRedirect(provider); // more for web
  }

  function signout() {
    db.auth()
      .signOut()
      .then(() => {
        setUserName("");
        setCurrentUser("")
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    const unsubscribe = db.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
        setUserName(user.displayName);

        // db.firestore().collection('tasks').orderBy("timestamp", "desc")
        // .onSnapshot((snapshot) => {
        //   console.log(snapshot.docs.map((doc) => (doc.data())))
        //   setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // });
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signout,
    userName,
    // todos
    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
