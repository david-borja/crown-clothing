import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { // We get this config object when we create our app on Firebase
  apiKey: "AIzaSyCaYXJqfI0WgNnrhtZdOO0h0roIqeIManw",
  authDomain: "crown-db-c4836.firebaseapp.com",
  projectId: "crown-db-c4836",
  storageBucket: "crown-db-c4836.appspot.com",
  messagingSenderId: "230270736315",
  appId: "1:230270736315:web:06e8cec74acdca515e569e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;