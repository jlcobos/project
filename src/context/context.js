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
            currentUser: false,
            companyInfo: false,
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
                    this.setData();
                    this.setState({[formName]: clearForm(form)});

                } else if (submitType === "organizationSignup") {

                    await this.Firebase.organizationSignup(formValues);
                    this.state.companyInfo = await this.Firebase.getOrganizationInfo();
                }
            }
            catch(err) {
                console.log(err.message); // TODO: fix for productin
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

    setData = async () => {

        const res = await this.Firebase.getOrganizationInfo();
        const currentUser = this.Firebase.auth.currentUser;

        this.setState({
            currentUser: currentUser ? true : false, 
            currentUserId: currentUser ? currentUser.uid : false,
            currentUserEmail: currentUser ? currentUser.email : false,
            companyInfo: res,
        });

        if(currentUser) console.log("User logged in")
        else console.error("login failed"); // TODO: Add meaningful user feedback
        console.log(this.state.currentUserId);
    } 

    logout = async () => {
        try {
            await this.Firebase.logout();
            window.location.replace("/login")
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
                    currentUserId: this.state.currentUserId,
                    currentUserEmail: this.state.currentUserEmail,
                    companyInfo: this.state.companyInfo,
                    logout: this.logout,
                    clearForm: clearForm, 
                }
            }
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}