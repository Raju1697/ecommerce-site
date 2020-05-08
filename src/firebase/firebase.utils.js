import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDibo1wjzHs_kmNxvohHUUnxNWjpBvmjVM",
    authDomain: "ecommerce-clothing-29e7a.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-29e7a.firebaseio.com",
    projectId: "ecommerce-clothing-29e7a",
    storageBucket: "ecommerce-clothing-29e7a.appspot.com",
    messagingSenderId: "495295940703",
    appId: "1:495295940703:web:f18c5c1b373bae31d4f3ea",
    measurementId: "G-KWR3YTENWR"
  };

export const createUserProfileDocument = async (userAuth, additionaldata) =>{
    if(!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`)
     const snapShot = await userRef.get();

     if(!snapShot.exists){
         const {displayName, email} = userAuth;
         const createdAt = new Date();

         try {
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...additionaldata
             })
         }catch (error){
             console.log('error creating user', error.message);
         }
     };
     return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;