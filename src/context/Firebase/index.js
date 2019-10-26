import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBz6LQRNNC3hi6RtYnzp5npu6O3fGqgJtw",
    authDomain: "rolling-stock-253305.firebaseapp.com",
    databaseURL: "https://rolling-stock-253305.firebaseio.com",
    projectId: "rolling-stock-253305",
    storageBucket: "rolling-stock-253305.appspot.com",
    messagingSenderId: "92811993478",
    appId: "1:92811993478:web:850ad5d33e0ca1f6dccc07",
    measurementId: "G-0WWHQ9KLS3"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
    }

    signup = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    login = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    logout = () => this.auth.signOut();

    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    passwordUpdate = password => this.auth.currentUser.updatePassword(password);

    currentUser = () => this.auth.onAuthStateChanged(function(user) {
        if (user) return true;
        else return false;
    });

    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}
export default Firebase;

// export const signup = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.error(error.message, error.code);
// });

// export const login = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.error(error.message, error.code);
// });

// export const userAuthState = firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     const displayName = user.displayName;
//     const email = user.email;
//     const emailVerified = user.emailVerified;
//     const photoURL = user.photoURL;
//     const isAnonymous = user.isAnonymous;
//     const uid = user.uid;
//     const providerData = user.providerData;
//       // ...
//     } else {
//         console.error("user signed out");
//       // User is signed out.
//       // ...
//     }
// });