import React, { Component, Fragment } from "react";
import Col from "../../components/Layout/Col";
import Input from "../../components/Form/Input";
import Checkbox from "../../components/Form/Checkbox";
import Button from "../../components/Form/Button";
import { supplierForm, form } from "./SupplierForm";
import StringMethods from "../../components/Utilities/stringMethods";

export default  class SupplierSignup extends Component {
    state = {form: {...form}}
    
    handleOnChange = ({target: {name, value, checked, type}}) => {
        const formUpdate = {...this.state.form};
        formUpdate[name] = type === "checkbox" ? checked : value;
        this.setState({form: formUpdate});
        console.log(this.state.form);
    }

    handleOnBlur = (e) => {
        console.log("on blur action");
    }

    handleSubmit = e => {
        console.log("supplier sign up submit action");
        e.preventDefault();
    }

    render(){
        return(
            <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
                <form className="d-flex flex-wrap">
                    {supplierForm.map(({name, displayName, type, choices, list, header, rows, columns, variant, wrapperClass, disabled, withAction, withHeader}) => {
                        return (
                            <React.Fragment key={name}>
                                {(type === "text") && <Input type={type} value={this.state.form[name]} name={name} action={this.handleOnChange} displayName={displayName} columns={`col-6`} blurAction={this.handleOnBlur} />}
                                {(type === "checkbox") && <Checkbox withHeader={withHeader} header={header} header={header} list={list} choices={choices} header={header} action={this.handleOnChange} columns={`col-12`} values={this.state.form}  />}
                                {(type === "button") && <Button variant={variant} disabled={disabled} text={displayName} withAction={withAction} action={this.handleSubmit} columns={columns} wrapperClass={wrapperClass} />}
                            </React.Fragment>
                        )
                    })}
                </form>
            </Col>
        );
    }
}