import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAzaVL_OTryeODImLSEwTXTWUEkZn7aePA",
  authDomain: "web-gallery-a5dce.firebaseapp.com",
  databaseURL: "https://web-gallery-a5dce.firebaseio.com",
  projectId: "web-gallery-a5dce",
  storageBucket: "web-gallery-a5dce.appspot.com",
  messagingSenderId: "72788704198",
  appId: "1:72788704198:web:c38f759acaa72b28bf90c7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
