import React, {Component, createContext} from "react";
import { supplierFromAndData, supplierSearchFormAndData, rfpFromAndData } from "./Forms";
import data from "./Data";

export const Context = createContext();
// export const ContextConsumer = Context.Consumer;

export class ContextProvider extends Component {

    state = {
        data,
        supplierFromAndData,
        rfpFromAndData,
        supplierSearchFormAndData
    }

    handleSubmit = (e, data) => {
        console.log(data);
        e.preventDefault();
    }
    handleOnChange = ({formName, target: {name, value, checked, type}}) => {
        const formUpdate = {...this.state[formName].formData};
        formUpdate[name] = type === "checkbox" ? checked : value;
        this.setState({form: formUpdate});
        console.log(this.state[formName]);
    }

    handleOnBlur = () => {
        console.log("on Blur action");
    }

    render(){
        return(
            <Context.Provider value={{data: this.state}}>
                {this.props.children}
            </Context.Provider>
            
        );
    }
}
