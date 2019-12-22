import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBXcms42BLqIssMe5v_196vrfbYRBAFrmI',
  authDomain: 'crwn-db-pt.firebaseapp.com',
  databaseURL: 'https://crwn-db-pt.firebaseio.com',
  projectId: 'crwn-db-pt',
  storageBucket: 'crwn-db-pt.appspot.com',
  messagingSenderId: '861861234957',
  appId: '1:861861234957:web:eada9ce441305984260844'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
