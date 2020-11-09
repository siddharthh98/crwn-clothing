import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-Y5YtAFH2Re6xPotRRaies2z9WHX7jXY",
    authDomain: "crwn-db-fb544.firebaseapp.com",
    databaseURL: "https://crwn-db-fb544.firebaseio.com",
    projectId: "crwn-db-fb544",
    storageBucket: "crwn-db-fb544.appspot.com",
    messagingSenderId: "410802985499",
    appId: "1:410802985499:web:655e257b15a9f5908db6be",
    measurementId: "G-YFFTGZ6SFW"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

  console.log(userAuth);
  
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email, 
          createdAt,
          ...additionalData
        })
      } catch(err) {
        console.log('error creating user', err.message);
      }
    }
    return userRef;
  }
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);