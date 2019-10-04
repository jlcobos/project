import React, { Component, Fragment } from "react";
import Col from "../../components/Layout/Col";
import Input from "../../components/Form/Input";
import Checkbox from "../../components/Form/Checkbox";
import Textarea from "../../components/Form/Textarea";
import StringMethods from "../../components/Utilities/stringMethods";
import Button from "../../components/Form/Button";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
// variant, action, buttonClass, text
export default class RFP extends Component {
    state = {
        formInput: [
            { type: "text", name: "Subject",},
            { type: "textarea", name: "Message Body", rows: 5},
            { type: "date", name: "deadline"},
            { type: "checkbox", name: "Requirements", choices: [{name: "cbc-requirement", checked: false}] },
            { type: "button", name: "file_upload", variant: "primary", text: "File Upload" },
        ]
    }


    fileUpload(e){
        console.log("file upload clicked");
        e.preventDefault()
    }
    
    render(){
        return(
            <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
                <form>
                    {this.state.formInput.map(({name, type, choices, label, rows, text, variant}) => {
                        const displayName = StringMethods.toDisplayName(name, "_");
                        return (
                            <Fragment key={name} >
                                {(type === "text") && <Input key={name} type={type} inputId={name} placeholder={displayName} />}
                                {(type === "date") && <Input key={name} type={type} inputId={name} placeholder={displayName} />}
                                {(type === "textarea") && <Textarea key={name} rows={rows} textareaId={name} placeholder={displayName} />}
                                {(type === "checkbox") && <Checkbox key={name} type={type} label={displayName} listHeader={displayName} checkboxList={choices}  />}
                                {(type === "button") && <Button variant={variant}  name={name} text={text} action={this.fileUpload}  />}
                            </Fragment>
                        )
                    })}
                </form>
            </Col>
        );
    }
}