import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_6tYDRe89QV9W_U3dxc5JvPFfQFGqVfU",
    authDomain: "fb-clone-78960.firebaseapp.com",
    projectId: "fb-clone-78960",
    storageBucket: "fb-clone-78960.appspot.com",
    messagingSenderId: "459782729105",
    appId: "1:459782729105:web:7bc3afeb91c87da0003e30",
    measurementId: "G-MDDNY9RK9G"
  };


  //We need this to connect out react front end to our firebase backend

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //We're gonna get access to the database

  const db = firebaseApp.firestore()

  // Code that would allow us to do things that need authentication

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;