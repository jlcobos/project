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
            currentRFPs: [],
            draftRFP: false,
            rfpActive: false,
            supplierRFPs: [],
        }
    }

    componentDidMount(){
        let currentRFPs;
        let supplierRFPs;
        this.Firebase.auth.onAuthStateChanged(async (user) => {
            if (user) {
                const organization = await this.Firebase.getOrganization();

                if(organization) {
                    currentRFPs = await this.Firebase.getAllRFPs(organization.id);
                    supplierRFPs = await this.Firebase.getSupplierRFPs(organization.id);
                }

                this.setState({
                    isLoggedIn: true,
                    currentUser: {uid: user.uid, email: user.email},
                    organization,
                    currentRFPs,
                    supplierRFPs,
                });
            }
            else {
                this.setState({
                    isLoggedIn: false,
                    currentUser: false,
                    organization: false,
                    belongsToOrganization: false,
                    componentsList: false,
                    supplierSearchResults: false,
                    currentRFPs: [],
                    draftRFP: false,
                    rfpActive: false,
                    supplierRFPs: [],
                });
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
                    this.setState({[formName]: clearForm(form)}); // TODO: dont clear if the login fails

                } else if (submitType === "organizationSignup") {

                    await this.Firebase.organizationSignup(formValues);
                    const organization = await this.Firebase.getOrganization();
                    this.setState({organization: organization});

                } else if (submitType === "supplierSearch") {

                    const supplierSearchResults = await this.Firebase.supplierSearch(formValues);
                    await this.setState({supplierSearchResults});

                } else if (submitType === "activateDraftRFP") {

                    await this.Firebase.activateDraftRFP(formValues, this.state.draftRFP);
                    const currentRFPs = await this.Firebase.getAllRFPs(this.state.organization.id);

                    this.setState({
                        draftRFP: null,
                        rfpActive: true,
                        currentRFPs, 
                    });

                    this.setState({[formName]: clearForm(form)});

                } else if (submitType === "rfpMessage") {

                    await this.Firebase.sendRFPMessage(formValues); // TODO: ok to user when message when sent
                    const currentRFPs = await this.Firebase.getAllRFPs(this.state.organization.id); // TODO: only request if message originated form this
                    const supplierRFPs = await this.Firebase.getSupplierRFPs(this.state.organization.id); // TODO: only request if message originated form this
                    this.setState({
                        currentRFPs, // TODO: only set if message originated form this
                        supplierRFPs, // TODO: only set if message originated form this
                        [formName]: clearForm(form), // TODO: only set if message did not fail
                    });
                }
            }
            catch(err) {
                console.log(err); // TODO: fix for production
                // TODO: this could be the universal error handler
            }
        }
    }

    handleOnChange = (e, formName, secondaryAction = false) => {
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

    prefillFormField = (inputName, value, formName) => {
        const form = {...this.state.forms[formName]};
        let updatedForm = updateForm(inputName, value, false, form);
        this.setState({[formName]: updatedForm});
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
    
    getBidder = async (organizationId) => {
        const bidder = await this.Firebase.getRFPSupplier(organizationId);
        return bidder;
    }

    logout = async () => {
        try {
            await this.Firebase.logout();
            window.location.replace("/login");
        } 
        catch (error) {
            console.error(error.massage);
        }
    }

    createDraftRFP = async (formData) => {
        const rfpData = this.state.forms.RFP(formData);
        const draftRFP = await this.Firebase.createDraftRFP(rfpData);
        this.setState({draftRFP: draftRFP}); // TODO: set to false when rfp initialized
    }

    getAllRFPs = async () => {
        const currentRFPs = await this.Firebase.getAllRFPs(this.state.organization.id);
        this.setState({currentRFPs})
    }

    toggleFlag = (flag, value) => { this.setState({[flag]: value}) }

    resetState = () => {
        this.setState({
            isLoggedIn: false,
            currentUser: false,
            organization: false,
            belongsToOrganization: false,
            componentsList: false,
            supplierSearchResults: false,
            currentRFPs: [],
            draftRFP: false,
            rfpActive: false,
            supplierRFPs: [],
        });
    }

    render(){
        return(
            <Context.Provider value={
                {
                    data: this.state.data, 
                    currentRFPs: this.state.currentRFPs,
                    supplierRFPs: this.state.supplierRFPs,
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
                    createDraftRFP: this.createDraftRFP,
                    draftRFP: this.state.draftRFP,
                    rfpActive: this.state.rfpActive,
                    toggleFlag: this.toggleFlag,
                    prefillFormField: this.prefillFormField,
                    getBidder: this.getBidder,
                }
            }
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}