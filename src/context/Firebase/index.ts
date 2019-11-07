import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ICreateOrLoginUser, IAddToUsersCollection } from "./Models/Users"
import { UserAuthorization } from "./Models/Enums";
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
            this.addToUsersCollection({uid: res.user.uid, authorization: UserAuthorization.user});
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





    addToUsersCollection = (user: IAddToUsersCollection) => {
        this.db.collection(Collections.users)
            .doc(user.uid)
            .set({authorization: user.authorization})
            .catch((err: any) => alert("something went wrong")); // TODO: error message for production
    }

    addUserToOrganization = (user: IAddToUsersCollection, organizationId: string) => {
        this.db.collection(`organizations/${organizationId}/users`)
            .add({uid: user.uid, authorization: user.authorization})
            .then((res) => console.log(res)) //TODO: add feedback for production
            .catch((res) => console.error(res)) // TODO: add feedback for production
            // TODO: check if user is in another orgs user collection
    }

    organizationSignup = (formData: object, currentUserUid: string, email: string) => {
        const data = this.toJson(new Organization(formData));
        const user: IAddToUsersCollection = {uid: this.db.doc(`users/${currentUserUid}`), authorization: UserAuthorization.admin}
        this.db.collection(Collections.organizations)
            .add(data)
                .then((res) => this.addUserToOrganization(user, res.id))
                .catch((error: any) => console.error("Error adding document: ", error));
    }

    createBidRequest = () => {
        
    }

    //create messages Subcollection on bid request

    toJson = (obj: object) => JSON.parse(JSON.stringify(obj));

}
export default Firebase;

