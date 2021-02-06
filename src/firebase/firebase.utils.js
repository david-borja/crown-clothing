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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;