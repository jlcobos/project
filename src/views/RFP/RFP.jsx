import React, { Component, Fragment } from "react";
import Col from "../../components/Layout/Col";
import Input from "../../components/Form/Input";
import Checkbox from "../../components/Form/Checkbox";
import Textarea from "../../components/Form/Textarea";
import Button from "../../components/Form/Button";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { rfpForm, form } from "./RFPFrom";
// variant, action, buttonClass, text
// TODO: deadline for submittal, document specification upload
//
export default class RFP extends Component {
    state = {
        form: {...form},
    }

    handleOnChange = ({target: {name, value, checked, type}}) => {
        const formUpdate = {...this.state.form};
        formUpdate[name] = type === "checkbox" ? checked : value;
        this.setState({form: formUpdate});
        console.log(this.state.form);
    }

    handleOnBlur = e => {
        console.log("on blur action");
    }

    handleSubmit = e => {
        console.log("rfp submit clicked");
        e.preventDefault();
    }


    fileUpload = e => {
        console.log("file upload clicked");
        e.preventDefault()
    }
    
    render(){
        return(
            <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
                <form className="d-flex flex-wrap">
                    {rfpForm.map(({name, displayName, type, choices, list, header, rows, columns, variant, wrapperClass, disabled, withAction, withHeader}) => {
                        return (
                            <React.Fragment key={name}>
                                {(type === "text") && <Input type={type} value={this.state.form[name]} name={name} action={this.handleOnChange} displayName={displayName} columns={columns} blurAction={this.handleOnBlur} />}
                                {(type === "textarea") && <Textarea type={type} value={this.state.form[name]} rows={rows} name={name} action={this.handleOnChange} displayName={displayName} columns={columns} blurAction={this.handleOnBlur} />}
                                {(type === "checkbox") && <Checkbox withHeader={withHeader} header={header} list={list} choices={choices} header={header} action={this.handleOnChange} columns={`col-12`} values={this.state.form}  />}
                                {(type === "button") && <Button variant={variant} disabled={disabled} text={displayName} withAction={withAction} action={this.handleSubmit} columns={columns} wrapperClass={wrapperClass} />}
                            </React.Fragment>
                        )
                    })}
                </form>
            </Col>
        );
    }
}