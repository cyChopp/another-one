import firebase from "firebase/app";

import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADXtR5Hd6NScgrnn6I1kBr8MQHMkC_Gzc",
    authDomain: "galaxy-todo.firebaseapp.com",
    projectId: "galaxy-todo",
    storageBucket: "galaxy-todo.appspot.com",
    messagingSenderId: "607166379197",
    appId: "1:607166379197:web:eed064981e17bce33eb3d4",
    measurementId: "G-23BTK94SKQ"
  };
const db = firebase.initializeApp(firebaseConfig);
export const authentication = firebase.auth;

export default db;
