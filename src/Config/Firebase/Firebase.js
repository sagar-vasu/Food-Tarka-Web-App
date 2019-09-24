import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyDId4appACOQs0ee3PDGtZCv9eyYo8E6dU",
    authDomain: "food-tarka-01.firebaseapp.com",
    databaseURL: "https://food-tarka-01.firebaseio.com",
    projectId: "food-tarka-01",
    storageBucket: "food-tarka-01.appspot.com",
    messagingSenderId: "261228604643",
    appId: "1:261228604643:web:b7e58dc5dd9cf4da5429d6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);



export default firebaseApp
