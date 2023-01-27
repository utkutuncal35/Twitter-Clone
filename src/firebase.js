import firebase from 'firebase';
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAJwDavVxXAlrJ1pjmcBzPzEFZCQN01W_0",
  authDomain: "twiiter-clone-fae54.firebaseapp.com",
  projectId: "twiiter-clone-fae54",
  storageBucket: "twiiter-clone-fae54.appspot.com",
  messagingSenderId: "148636039238",
  appId: "1:148636039238:web:49e692c412a63871823247",
  measurementId: "G-W9PNB84Q18"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.firestore();

export default db;