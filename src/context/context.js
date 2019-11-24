import React, {Component, createContext} from "react";
import forms from "./Forms";
import supplierTestData from "./SupplierTestData";
import { validateForm } from "./Validation";
import { clearForm, updateForm } from "./Forms/FormMethods";
import Firebase from "./Firebase/index.ts";
import data from "./Data";
import { Products } from "./Forms/FormInterfaces";

export const Context = createContext();

export class ContextProvider extends Component {

    constructor(){
        super();
        this.Firebase = Firebase;
        this.state = {
            data,
            forms,
            supplierTestData,
            isLoggedIn: false,
            currentUser: false,
            organization: false,
            belongsToOrganization: false,
            componentsList: false,
            supplierSearchResults: false,
            currentRFPs: false,
        }
    }

    componentDidMount(){
        this.Firebase.auth.onAuthStateChanged(async (user) => {
            if (user) {
                const organization = await this.Firebase.getOrganization();
                console.log(organization)
                this.setState({
                    isLoggedIn: true,
                    currentUser: {uid: user.uid, email: user.email},
                    organization: organization,
                });
            }
            else {
                this.setState({
                    isLoggedIn: false,
                    currentUser: false,
                })
            }
        });
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
                } else if (submitType === "supplierSearch") {
                    const supplierSearchResults = await this.Firebase.supplierSearch(formValues);
                    await this.setState({supplierSearchResults});
                }
            }
            catch(err) {
                console.log(err.message); // TODO: fix for productin
            }
        }
    }

    handleOnChange = (e,formName, secondaryAction = false) => {
        const { name, value, checked } = e.target;
        const form = {...this.state.forms[formName]};

        let updatedForm = updateForm(name, value, checked, form);

        this.setState({[formName]: updatedForm});

        if (e.target.type !== "checkbox") e.preventDefault();

        if(secondaryAction) this.secondaryActions(secondaryAction);
    }

    secondaryActions = async (secondaryAction) => {
        if (secondaryAction === "toggleProductsList") {
            this.toggleProductsList();
        }
    }

    toggleProductsList = () => {
        const element = document.getElementById("components");
        var classes = element.className.split(" ");
        if (element.classList) { 
            element.classList.toggle("hidden");
        } else {
            // For IE9
            var i = classes.indexOf("hidden");
        
            if (i >= 0) {
                classes.splice(i, 1);
            }
            else {

                classes.push("hidden");
                element.className = classes.join(" "); 
            } 
        }  
        if (classes.includes("hidden")) {
            const updatedForm = updateForm("products", "", false, forms.organizationSignupForm);
            this.setState({organizationSignupForm: updatedForm});
        }      
    }

    handleOnBlur = (e,formDataName) => {
        // console.log(`on Blur action for: `, e.target );
    }

    getOrganization = async () => {

        const organization = await this.Firebase.getOrganization();
        
        this.setState({
            organizationInfo: organization,
        });
    } 

    logout = async () => {
        try {
            await this.Firebase.logout();
            // window.location.replace("/login");
        } 
        catch (error) {
            console.log(error.massage);
        }
    }

    createRFP = async (formData) => {
        const rfp = this.state.forms.initializeRFP(formData);
        const newRfpId = await this.Firebase.createRFP(rfp);
        console.log(newRfpId);
    }

    render(){
        return(
            <Context.Provider value={
                {
                    data: this.state.data, 
                    supplierSearchResults: this.state.supplierSearchResults,
                    forms: this.state.forms,
                    isLoggedIn: this.state.isLoggedIn,
                    currentUser: this.state.currentUser,
                    organization: this.state.organization,
                    handleOnChange: this.handleOnChange, 
                    handleOnBlur: this.handleOnBlur, 
                    handleSubmit: this.handleSubmit,
                    logout: this.logout,
                    clearForm: clearForm, 
                    getComponentsList: this.getComponentsList,
                    createRFP: this.createRFP
                }
            }
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}