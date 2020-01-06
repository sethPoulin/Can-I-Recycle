import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQv9nOdCdxHKMyuRztyCSyxOk09rT5wUI",
  authDomain: "project5-recycling.firebaseapp.com",
  databaseURL: "https://project5-recycling.firebaseio.com",
  projectId: "project5-recycling",
  storageBucket: "",
  messagingSenderId: "482541640895",
  appId: "1:482541640895:web:d6dee38ef23312530dfa0a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
