import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCld6JqRfnACXcDXq8RsdY95AgblZkOhL0",
  authDomain: "react-firebase-auth-8c9b0.firebaseapp.com",
  projectId: "react-firebase-auth-8c9b0",
  storageBucket: "react-firebase-auth-8c9b0.appspot.com",
  messagingSenderId: "233055648526",
  appId: "1:233055648526:web:adc123abcbcd0a3cd1f55f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = app.storage();




export { db, auth, storage,firebase };
