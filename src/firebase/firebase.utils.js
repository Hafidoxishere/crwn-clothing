import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyDaqFWtJ_N5y37lH5xVLXX62Pbkz7qFBfg",
  authDomain: "crwn-db-13c53.firebaseapp.com",
  databaseURL: "https://crwn-db-13c53.firebaseio.com",
  projectId: "crwn-db-13c53",
  storageBucket: "crwn-db-13c53.appspot.com",
  messagingSenderId: "316615927500",
  appId: "1:316615927500:web:6918c0f2a7d146fe510469",
  measurementId: "G-2LFY30QVE0"
};

export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;
    
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 
    if(!snapShot.exists){
      const{ displayName, email}=userAuth;
      const createdAt=new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;