import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCbNr4gaO9-l3KoHURwfivJN15I5uhqWic",
  authDomain: "vue-todo-af370.firebaseapp.com",
  projectId: "vue-todo-af370",
  storageBucket: "vue-todo-af370.appspot.com",
  messagingSenderId: "257853784456",
  appId: "1:257853784456:web:a1abec1f5ced5682a8ba3d",
  measurementId: "G-6QGZKVBJCH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
