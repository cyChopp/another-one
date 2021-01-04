import { createContext, useContext, useEffect, useState } from "react";
import db from "../firebase";
import firebase from "firebase";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userName, setUserName] = useState('Anonymous');

  function signup() {

    const provider = new firebase.auth.GoogleAuthProvider();

    db.auth().signInWithPopup(provider) // more for mobile

    // db.auth().signInWithRedirect(provider); // more for web
  }

  function signout() {
    db.auth()
      .signOut()
      .then(() => {
        setUserName("Anonymous");
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
      }
    });
    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    signup,
    signout,
    userName,
    // todos
    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
