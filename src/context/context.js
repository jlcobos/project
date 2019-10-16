import React, {Component, createContext} from "react";
import forms from "./Forms";
import { isValid } from "./Validation/Validation";
import { formReducer } from "./Forms/FormMethods";
import data from "./Data";

export const Context = createContext();

export class ContextProvider extends Component {

    state = {
        data,
        forms,
    }

    handleSubmit = (e, formName) => {
        e.preventDefault();
        const formData = formReducer(this.state.forms[formName]);
        // const validation = isValid(form, formData);
        console.log(formData);
    }
    handleOnChange = (e,formName) => {
        let updatedForm = this.getFormData(e, formName);
        this.setState({[formName]: updatedForm});
        console.log(this.state.forms[formName]);
    }

    handleOnBlur = (e,formDataName) => {
        console.log(`on Blur action for: `, e.target );
    }

    getFormData = (e,formName) => {
        const { name, value, checked, type } = e.target;
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

    render(){
        return(
            <Context.Provider value={{data: this.state.data, forms, handleOnChange: this.handleOnChange, handleOnBlur: this.handleOnBlur, handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </Context.Provider>
            
        );
    }
}
