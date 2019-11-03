import React, {Component, createContext} from "react";
import forms from "./Forms";
import supplierTestData from "./SupplierTestData";
import { validateForm } from "./Validation";
import { formReducer, clearForm, updateForm } from "./Forms/FormMethods";
import { ICreateUser, IAddToUsersCollection } from "./Firebase/Models/Users"
import Firebase from "./Firebase/index.ts";
import data from "./Data";

export const Context = createContext();

export class ContextProvider extends Component {

    constructor(){
        super();
        this.Firebase = new Firebase();
        this.state = {
            data,
            forms,
            supplierTestData,
            currentUserId: false,
            currentUser: false,
        }
    }

    handleSubmit = async (e, formName, submitType) => {
        e.preventDefault();
        const {isValid, form} = validateForm(this.state.forms[formName]);
        this.setState({[formName]: form});

        if(isValid) {
            try {
                let res;
                const formData = formReducer(this.state.forms[formName]);

                if      (isValid && submitType === "signup")         res = await this.Firebase.signup(formData);
                else if (isValid && submitType === "login")          res = await this.Firebase.login(formData);
                else if (isValid && submitType === "supplierSignup") res = await this.Firebase.supplierSignup(formData)
                
                this.setState({[formName]: clearForm(form)});
                this.setCurrentUser();
            }
            catch(err) {
                console.log(err.message);
            }
        }
    }
    handleOnChange = (e,formName) => {
        const { name, value, checked } = e.target;
        const form = [...this.state.forms[formName]];

        let updatedForm = updateForm(name, value, checked, form);

        this.setState({[formName]: updatedForm});

        if (e.target.type !== "checkbox") e.preventDefault();
    }

    handleOnBlur = (e,formDataName) => {
        // console.log(`on Blur action for: `, e.target );
    }

    setCurrentUser = () => {
        const currentUser = this.Firebase.auth.currentUser;
        this.setState({currentUser: currentUser ? true : false, currentUserId: currentUser.uid});
        if(currentUser) console.log("User logged in")
        else console.log("login failed");
        console.log(this.state.currentUserId);
    } 

    logout = async () => {
        try {
            await this.Firebase.logout();
            this.setCurrentUser();
        } 
        catch (error) {
            console.log(error.massage);
        }
    }       

    render(){
        return(
            <Context.Provider value={
                {
                    data: this.state.data, 
                    handleOnChange: this.handleOnChange, 
                    handleOnBlur: this.handleOnBlur, 
                    handleSubmit: this.handleSubmit,
                    forms: this.state.forms, 
                    currentUser: this.state.currentUser,
                    logout: this.logout, 
                }
            }
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}