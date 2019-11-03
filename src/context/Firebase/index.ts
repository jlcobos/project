import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ICreateOrLoginUser } from "./Models/Users"
import { Organization } from "./Models/Organizations"
import { Collections } from "./Models/Enums";

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
    auth: any;
    db: any;
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    signup = (newUser: ICreateOrLoginUser) => this.auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((res: any) => {
            this.addToUsersCollection(res.user.uid);
        })
        .catch((err: any) => console.error(err));

    login = (credentials: ICreateOrLoginUser) => this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password))
            .catch( (error: any) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorCode, errorMessage);
        });

    logout = () => this.auth.signOut();

    passwordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

    passwordUpdate = (password: string) => this.auth.currentUser.updatePassword(password);

    currentUser = () => this.auth.onAuthStateChanged(function(user: any) {
        if (user) return true;
        else return false;
    });





    addToUsersCollection = (uid: string) => {
        this.db.collection(Collections.users)
            .doc(uid)
            .set({active: true})
            .catch((err: any) => alert("something went wrong")); // TODO: error message for production
    }

    supplierSignup =(formData: object) => {
        const data = this.toJson(new Organization(formData));
        this.db.collection(Collections.organizations)
            .add(data)
            .then((res: any) => console.log("Document written with ID: ", res.id))
            .catch((error: any) => console.error("Error adding document: ", error));
    }

    toJson = (obj: object) => JSON.parse(JSON.stringify(obj));

}
export default Firebase;

