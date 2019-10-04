import React, { Component, Fragment } from "react";
import Col from "../../components/Layout/Col";
import Input from "../../components/Form/Input";
import Checkbox from "../../components/Form/Checkbox";
import { supplierForm } from "./SupplierForm";
import StringMethods from "../../components/Utilities/stringMethods";

export default  class SupplierSignup extends Component {
    state = {
        text_inputs: supplierForm,
        checkboxes: {             
            diversity_and_ownership: {
                choices: {
                    veteran_owned: false,  
                    minority_owned: false, 
                    woman_owned: false, 
                    buy_america_company: false 
                }
            },             
            portfolio: {
                choices: {
                    portfolio: false
                },
            } 
            
        }

    }
    
    handleOnChange = ({target: {name, value, checked}}) => {
        const text_inputs = {...this.state.text_inputs};
        text_inputs[name].value = value;
        this.setState({text_inputs});
        console.log(text_inputs);

    }

    handleOnBlur = (e) => {
        console.log("on blur");
    }

    render(){
        const textInputs = Object.keys(this.state.text_inputs);
        const { diversity_and_ownership, portfolio } = this.state.checkboxes;
        return(
            <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
                <form className="d-flex flex-wrap">
                    {textInputs.map((name) => {
                        const displayName = StringMethods.toDisplayName(name, "_");
                        const { value, type, columns } = this.state.text_inputs[name]
                        return <Input key={name} type={type} value={value} name={name} action={this.handleOnChange} displayName={displayName} columns={"col-6"} blurAction={this.handleOnBlur} />
                        {/* {(type === "checkbox") && <Checkbox key={props.name} {...props}  />} */}
                    })}
                </form>
            </Col>
        );
    }
}