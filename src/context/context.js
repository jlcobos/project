import React, {Component, createContext} from "react";
import { supplierFormAndData, supplierSearchFormAndData, rfpFormAndData, loginFormAndData, signupFormAndData } from "./Forms";
import { isValid } from "./Validation/Validation";
import data from "./Data";

export const Context = createContext();

export class ContextProvider extends Component {

    state = {
        data,
        supplierFormAndData,
        rfpFormAndData,
        supplierSearchFormAndData,
        loginFormAndData,
        signupFormAndData,
    }

    handleSubmit = (e, form, formDataName) => {
        e.preventDefault();
        const formData = this.getFormData(e, formDataName).formData[formDataName];
        delete formData[""]; // find out why an empty key/val is occurring
        form = form.filter(({type}) => type !== "checkbox" && type !== "button");
        const validation = isValid(form, formData);
        console.log(validation);
    }
    handleOnChange = (e,formDataName) => {
        let data = this.getFormData(e, formDataName);
        this.setState({[data.key]: data.formData});
        console.log( e.target.value, e.target.checked,data.formData[formDataName]);
    }

    handleOnBlur = (e,formDataName) => {
        console.log(formDataName)
        console.log(`on Blur action for: `, e.target );
    }

    getFormData = (e,formDataName) => {
        const { name, value, checked, type } = e.target;
        let result = {};
        let formData;
        let val;
        for (let key in this.state){
            if (this.state[key][formDataName]) {
                formData = {...this.state[key]};
                result.formData = formData;
                val = type === "checkbox" ? checked : value;
                formData[formDataName][name] = val;
            }
        }
        return result;
    }

    render(){
        return(
            <Context.Provider value={{state: this.state, handleOnChange: this.handleOnChange, handleOnBlur: this.handleOnBlur, handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </Context.Provider>
            
        );
    }
}
