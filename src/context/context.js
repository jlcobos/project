import React, {Component, createContext} from "react";
import forms from "./Forms";
import { isValid } from "./Validation";
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
            currentUser: null,
        }
    }

    handleSubmit = (e, formName, submitType) => {
        e.preventDefault();
        const formData = formReducer(this.state.forms[formName]);
        const validation = isValid(this.state.forms[formName].filter(({type}) => type !== "button" && type !== "checkbox"));
        if (validation.result && submitType === "signup")  this.signup(formData);
        else if (validation.result && submitType === "login")  this.login(formData);
    }
    handleOnChange = (e,formName) => {
        let updatedForm = this.getFormData(e, formName);
        this.setState({[formName]: updatedForm});
        if (e.target.type !== "checkbox") e.preventDefault();
    }

    handleOnBlur = (e,formDataName) => {
        console.log(`on Blur action for: `, e.target );
    }

    getFormData = (e,formName) => {
        const { name, value, checked } = e.target;
        const form = [...this.state.forms[formName]];
        return form.map(input => {
            if(input.name === name && input.type !== "checkbox") input.value = value;
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