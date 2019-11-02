import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ICreateUser } from "./Models/Users"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    signup = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)
        .then(res => {
            this.addToUsersCollection(res.user.uid);
        })
        .catch(err => console.error(err));

    login = (email, password) => this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
    .catch( error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorCode, errorMessage);
    });

    logout = () => this.auth.signOut();

    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    passwordUpdate = password => this.auth.currentUser.updatePassword(password);

    currentUser = () => this.auth.onAuthStateChanged(function(user) {
        if (user) return true;
        else return false;
    });





    addToUsersCollection = (uid) => {
        let userId;
        this.db.collection("users")
            .doc(uid)
            .set({this: "worked"})
            .catch(err=> alert("something went wrong")); // TODO: error message for production
    }

    supplierSignup =(formData) => {
        this.db.collection("suppliers").add(formData)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

}
export default Firebase;

