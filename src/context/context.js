import React, {Component, createContext} from "react";
import forms from "./Forms";
import supplierTestData from "./SupplierTestData";
import { validateForm } from "./Validation";
import { formReducer, clearForm } from "./Forms/FormMethods";
import { ICreateUser, IAddToUsersCollection } from "./Firebase/Models/Users"
import Firebase from "./Firebase";
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
            // currentUser: null,
            currentUser: true,
        }
    }

    handleSubmit = async (e, formName, submitType) => {
        e.preventDefault();
        const {isValid, form} = validateForm(this.state.forms[formName]);
        this.setState({[formName]: form});

        if(isValid) {
            try {
                const formData = formReducer(this.state.forms[formName]);
                if (isValid && submitType === "signup") await this.signup(formData);
                else if (isValid && submitType === "login") await this.login(formData);
                else if (isValid && submitType === "supplierSignup") await this.supplierSignup(formData);
                alert("success");
                this.setState({[formName]: clearForm(form)});
            }
            catch(err) {
                console.log(err.message);
            }
        }
    }
    handleOnChange = (e,formName) => {
        let updatedForm = this.updateForm(e, formName);
        this.setState({[formName]: updatedForm});
        if (e.target.type !== "checkbox") e.preventDefault();
    }

    handleOnBlur = (e,formDataName) => {
        // console.log(`on Blur action for: `, e.target );
    }

    updateForm = (e,formName) => {
        const { name, value, checked, validity } = e.target;
        const form = [...this.state.forms[formName]];
        return form.map(input => {
            let validation;
            if(input.validation) validation = input.validation;
            
            // console.log(validity.valid);
            if(input.name === name && input.type !== "checkbox") {
                if (validation.lengthRequired && input.value.length < validation.length.max ) input.value = value
                else if (validation.lengthRequired && value.length >= validation.length.max) return input
                else input.value = value;
            }

            if (input.type === "checkbox") input.choices = input.choices.map(choice =>{
                if (choice.name === name) choice.value = checked;
                return choice;
            });
            return input;
        });
    }

    signup = async ({email, password}) => {
        try {
            await this.Firebase.signup(email, password);
            this.setCurrentUser();
        } catch(error) {
            console.log(error.message);
        }
    } 
    login = async ({email, password}) => {
        try {
            await this.Firebase.login(email, password);
            this.setCurrentUser();
            console.error("login success");
        } catch(error) {
            console.error(error.message);
        }
    }
    
    logout = async () => {
        try {
            await this.Firebase.logout();
            this.setCurrentUser();
        } catch (error) {
            console.log(error.massage);
        }
    }

    setCurrentUser = () => {
        const currentUser = this.Firebase.auth.currentUser;
        this.setState({currentUser: currentUser ? true : false});
        console.log("User logged in");
    }

    supplierSignup = async (formData) => {
        this.Firebase.supplierSignup(formData);
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