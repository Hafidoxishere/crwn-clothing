import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBb5gn4utbiWzQqrpdibUXIr5aCLZk-VL0",
    authDomain: "crwn-db-1f113.firebaseapp.com",
    databaseURL: "https://crwn-db-1f113.firebaseio.com",
    projectId: "crwn-db-1f113",
    storageBucket: "crwn-db-1f113.appspot.com",
    messagingSenderId: "29334635094",
    appId: "1:29334635094:web:5de5098af043851c0ab1f7",
    measurementId: "G-1MCQ3TMHX1"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;