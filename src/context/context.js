import React, {Component, createContext} from "react";
import forms from "./Forms";
import { validateForm } from "./Validation";
import { formReducer } from "./Forms/FormMethods";
import Firebase from "./Firebase";
import data from "./Data";

export const Context = createContext();

export class ContextProvider extends Component {

    constructor(){
        super();
        this.Auth = new Firebase();
        this.state = {
            data,
            forms,
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
        console.log(`on Blur action for: `, e.target );
    }

    updateForm = (e,formName) => {
        const { name, value, checked, validity: { valid } } = e.target;
        const form = [...this.state.forms[formName]];
        return form.map(input => {
            let validation;
            if(input.validation) validation = input.validation;

            if(input.name === name && valid && input.type !== "checkbox") {
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
            await this.Auth.signup(email, password);
            this.setCurrentUser();
        } catch(error) {
            console.log(error.message);
        }
    } 
    login = async ({email, password}) => {
        try {
            await this.Auth.login(email, password);
            this.setCurrentUser();
            console.error("login success");
        } catch(error) {
            console.error(error.message);
        }
    }
    
    logout = async () => {
        try {
            await this.Auth.logout();
            this.setCurrentUser();
        } catch (error) {
            console.log(error.massage);
        }
    }

    setCurrentUser = () => {
        const currentUser = this.Auth.auth.currentUser;
        this.setState({currentUser: currentUser ? true : false});
        console.log("User logged in");
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