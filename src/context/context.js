import React, {Component, createContext} from "react";
import { supplierFormAndData, supplierSearchFormAndData, rfpFormAndData } from "./Forms";
import data from "./Data";

export const Context = createContext();
// export const ContextConsumer = Context.Consumer;

export class ContextProvider extends Component {

    state = {
        data,
        supplierFormAndData,
        rfpFormAndData,
        supplierSearchFormAndData,
        // handleSubmit: this.handleSubmit,
        // handleOnChange: this.handleOnChange,
        // handleOnBlur: this.handleOnBlur
    }

    handleSubmit = (e, data) => {
        // console.log(data);
        console.log("on submit detected")
        e.preventDefault();
    }
    handleOnChange = ({formName, target: {name, value, checked, type}}) => {
        console.log("on change detected")
        // const formUpdate = {...this.state[formName].formData};
        // formUpdate[name] = type === "checkbox" ? checked : value;
        // this.setState({form: formUpdate});
        // console.log(this.state[formName]);
    }

    handleOnBlur = () => {
        console.log("on Blur action");
    }

    render(){
        return(
            <Context.Provider value={{state: this.state, handleOnChange: this.handleOnChange, handleOnBlur: this.handleOnBlur, handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </Context.Provider>
            
        );
    }
}
