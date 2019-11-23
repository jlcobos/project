import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { UserAuthorization, ICreateOrLoginUser, IAddUserToOrganization } from "../Models/Users";
import { IOrganization } from "../Models/Organizations"
import { Collections } from "../Models/Enums";

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
        .then((res: any) => console.log(res)) // TODO: fix for production
        .catch((err: any) => console.error(err)); // TODO: fix for production

    login = async (credentials: ICreateOrLoginUser) => {
        try 
        {
            await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                    
            await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        } 
        catch (err) {
            console.error(err);
        }
    }

    logout = () => this.auth.signOut();

    passwordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

    passwordUpdate = (password: string) => this.auth.currentUser.updatePassword(password);

    currentUser = () => this.auth.onAuthStateChanged((res: any) => {
        if (res) return res;
        else return false;
    });

    organizationSignup = (formData: IOrganization) => { //TODO: verify user is logged in and authorized to do this action
// TODO: check that suppliers are not duplicates based on address, company name etc...
        formData.users.push(this.auth.currentUser.uid);
        formData.adminUsers.push(this.auth.currentUser.uid);

        this.db.collection(Collections.organizations) // TODO: cross check that user is not part of more than one organization! TODO: dont forget this
            .add(formData)
            .then((res) => console.log(res)) // TODO: fix for production
            .catch((error: any) => console.error("Error adding document: ", error)); // TODO: fix for production
    }

    createRFP = async (rfp) => {
        // const authorized = this.isAdmin(uid, orgId);
        try {
            const res = await this.db.collection(Collections.RFP)
            .add(rfp);
            return res.id;
        } catch (err) {
            console.error(err.messge) // TODO: handle this
        }
    }

    getOrganizationInfo = async () => {
        try 
        {
            const res = await this.db.collection(Collections.organizations)
                .where("users", "array-contains", this.auth.currentUser.uid)
                .get();
    
                return res.docs[0].data();
        } 
        catch (err) {
            console.error(err); // TODO: fix for production
        }
    }

    supplierSearch = async (formValues) => {
        let query = await this.db.collection(Collections.organizations);

            if(0 < 1)                          query = query.where("supplier", "==", true);
            if (formValues.component)          query = query.where("components", "==", formValues.component);
            if (formValues.buyAmerica)         query = query.where("buyAmerica", "==", formValues.buyAmerica);
            if (formValues.byAmerica)          query = query.where("byAmerica", "==", formValues.byAmerica);
            if (formValues.establishedProduct) query = query.where("establishedProduct", "==", formValues.establishedProduct);
            if (formValues.greenCertified)     query = query.where("greenCertified", "==", formValues.greenCertified);
            if (formValues.isoCertified)       query = query.where("isoCertified", "==", formValues.isoCertified);
            if (formValues.minorityOwned)      query = query.where("minorityOwned", "==", formValues.minorityOwned);
            if (formValues.veteranOwned)       query = query.where("veteranOwned", "==", formValues.veteranOwned);
            if (formValues.womanOwned)         query = query.where("womanOwned", "==", formValues.womanOwned);

        let result = await query.get();
        result = result.docs.map(doc => ({id: doc.id,...doc.data()}));
        return result;
    }       
}
export default new Firebase();

