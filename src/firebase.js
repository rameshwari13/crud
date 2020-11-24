import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAUvrUBy3rKA-WKiNR8qGnOxO4D2ve_vUY",
    authDomain: "react-crud-c4ad6.firebaseapp.com",
    databaseURL: "https://react-crud-c4ad6.firebaseio.com",
    projectId: "react-crud-c4ad6",
    storageBucket: "react-crud-c4ad6.appspot.com",
    messagingSenderId: "1027627601934",
    appId: "1:1027627601934:web:9c5f26b47c1abc8c9a6c5f"
  };
  // Initialize Firebase
   var fireDb =  firebase.initializeApp(firebaseConfig);

   export default fireDb.database().ref();