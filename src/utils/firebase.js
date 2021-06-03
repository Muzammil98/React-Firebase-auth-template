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

export const googleSignInPopup = new Promise((resolve, reject) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/userinfo.email");

  app
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;

      const token = credential.accessToken;
      const user = result.user;
      // console.log("USER SIGNED IN RESPONSE", token, user);
      return resolve(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      // console.log("USER SIGNED IN Error", error);
      return reject(error);
      // return {
      //   errorCode,
      //   errorMessage,
      //   credential,
      //   email,
      // };
    });
});

const githubSignInPopup = new Promise((resolve, reject) => {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("read:user");

  app
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;

      const token = credential.accessToken;
      const user = result.user;
      return resolve(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      return reject(error);
    });
});

const signOut = () => {
  app
    .auth()
    .signOut()
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error;
    });
};

export { db, auth, storage, githubSignInPopup, signOut };
