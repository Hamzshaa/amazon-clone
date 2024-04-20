import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnaJnWz7_fkvysbDG3x8oi_-ulhZqlzKQ",
  authDomain: "clone-af8bb.firebaseapp.com",
  projectId: "clone-af8bb",
  storageBucket: "clone-af8bb.appspot.com",
  messagingSenderId: "430313320102",
  appId: "1:430313320102:web:114f866bd93824f9628e67",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
