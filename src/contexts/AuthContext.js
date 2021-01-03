import { createContext, useContext, useEffect, useState } from "react";
import db from "../firebase";
import firebase from 'firebase'
import { authentication } from "../firebase";
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userName , setUserName] = useState();
  function signup() {
    // Using a popup.
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    db.auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user.displayName,'sign IN')
        setUserName(user.displayName)

      });
  }

   function signout() {
    // Using a popup.
  db.auth().signOut().then(() => {
    console.log('sign OUT')
  }).catch((error) => {
    alert(error)
  });
  }

  useEffect(() => {
    const unsubscribe = db.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signout,
    userName,
    currentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
