import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4yXaeNpBNKTd-c_B0Y6JEswLsW6OyHuw",
    authDomain: "twitter-clone-d66d7.firebaseapp.com",
    databaseURL: "https://twitter-clone-d66d7.firebaseio.com",
    projectId: "twitter-clone-d66d7",
    storageBucket: "twitter-clone-d66d7.appspot.com",
    messagingSenderId: "67355823521",
    appId: "1:67355823521:web:caf76cadbc3e7923138fe0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;