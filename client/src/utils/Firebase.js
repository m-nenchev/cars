import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDIQK7KaQQJrsb6xpVf1-lt-v5A9ob0sUs",
    authDomain: "cars-project-2edf1.firebaseapp.com",
    databaseURL: "https://cars-project-2edf1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cars-project-2edf1",
    storageBucket: "cars-project-2edf1.appspot.com",
    messagingSenderId: "664914661822",
    appId: "1:664914661822:web:1c8536a2b9d4e97f0da9ef"
  };
firebase.initializeApp(firebaseConfig)

  export default firebase;
  export const auth = firebase.auth();