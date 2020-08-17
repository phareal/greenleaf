import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVLSTrTdcHDsF1cbsK1EHLPU-vpjER7nI",
    authDomain: "greenleaf-102d3.firebaseapp.com",
    databaseURL: "https://greenleaf-102d3.firebaseio.com",
    projectId: "greenleaf-102d3",
    storageBucket: "greenleaf-102d3.appspot.com",
    messagingSenderId: "566767116783",
    appId: "1:566767116783:web:2854cdb882897fa423161a",
    measurementId: "G-QW9Z16HT62"
};
firebase.initializeApp(firebaseConfig)

export default firebase
