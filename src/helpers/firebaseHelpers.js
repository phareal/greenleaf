import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCVHAcfKkY2ro_IL4OPYlDmsDFOwUg6GHM",
    authDomain: "greenleaf-2.firebaseapp.com",
    databaseURL: "https://greenleaf-2.firebaseio.com",
    projectId: "greenleaf-2",
    storageBucket: "greenleaf-2.appspot.com",
    messagingSenderId: "110054249085",
    appId: "1:110054249085:web:b411544d0ca889fdb85714",
    measurementId: "G-CCJWTLFP4B"
};
firebase.initializeApp(firebaseConfig)

export default firebase
