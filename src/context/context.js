import React, {Component, createContext} from "react";
import forms from "./Forms";
import supplierTestData from "./SupplierTestData";
import { validateForm } from "./Validation";
import { clearForm, updateForm } from "./Forms/FormMethods";
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
            currentUser: true,
        }
    }

    handleSubmit = async (e, formName, submitType) => {
        e.preventDefault();
        const {isValid, form} = validateForm(this.state.forms[formName]);
        this.setState({[formName]: form});
        const formValues = this.state.forms[formName].getValues();

        if(isValid) {
            try 
            {
                if (submitType === "signup") {

                    await this.Firebase.signup(formValues);

                } else if (submitType === "login") {

                    await this.Firebase.login(formValues);

                } else if (submitType === "organizationSignup") {

                    await this.Firebase.organizationSignup(formValues, this.state.currentUserId, this.state.currentUserEmail);
                }
                
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
        const form = {...this.state.forms[formName]};

        let updatedForm = updateForm(name, value, checked, form);

        this.setState({[formName]: updatedForm});

        if (e.target.type !== "checkbox") e.preventDefault();
    }

    handleOnBlur = (e,formDataName) => {
        // console.log(`on Blur action for: `, e.target );
    }

    setCurrentUser = () => {
        const currentUser = this.Firebase.auth.currentUser;
        this.setState({
            currentUser: currentUser ? true : false, 
            currentUserId: currentUser ? currentUser.uid : false,
            currentUserEmail: currentUser ? currentUser.email : false,
        });

        if(currentUser) console.log("User logged in")
        else console.error("login failed"); // TODO: Add meaninful user feedback
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