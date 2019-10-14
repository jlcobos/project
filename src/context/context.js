import React, {Component, createContext} from "react";
import { supplierFormAndData, supplierSearchFormAndData, rfpFormAndData, loginAndSignupFormAndData } from "./Forms";
import data from "./Data";

export const Context = createContext();
// export const ContextConsumer = Context.Consumer;

export class ContextProvider extends Component {

    state = {
        data,
        supplierFormAndData,
        rfpFormAndData,
        supplierSearchFormAndData,
        loginAndSignupFormAndData,
        // handleSubmit: this.handleSubmit,
        // handleOnChange: this.handleOnChange,
        // handleOnBlur: this.handleOnBlur
    }

    handleSubmit = (e, formDataName) => {
        const formData = this.getFormData(e, formDataName).formData[formDataName];
        delete formData[""]; // find out why an empty key/val is occurring
        console.log(formData);
        e.preventDefault();
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
