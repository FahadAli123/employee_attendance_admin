import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBmMXCnetp78li20VPEOJe7rOoT6xsYG-w",
  authDomain: "schooler-80cb9.firebaseapp.com",
  projectId: "schooler-80cb9",
  storageBucket: "schooler-80cb9.appspot.com",
  messagingSenderId: "806435164975",
  appId: "1:806435164975:web:1c1be8d07be7af23a507da",
  measurementId: "G-98K0Y4G705",
});

export const auth = getAuth(app);
