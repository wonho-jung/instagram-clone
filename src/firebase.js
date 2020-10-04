import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGDaz7CDqXhkBagwKy9Fb3VDR8Xi6PCHM",
  authDomain: "instagram-clone-8d978.firebaseapp.com",
  databaseURL: "https://instagram-clone-8d978.firebaseio.com",
  projectId: "instagram-clone-8d978",
  storageBucket: "instagram-clone-8d978.appspot.com",
  messagingSenderId: "873999894563",
  appId: "1:873999894563:web:d889a3f9eb4d1d7dc30996",
  measurementId: "G-S5Z2VX2T00",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
