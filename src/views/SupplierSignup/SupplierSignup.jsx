import React, { Component, Fragment } from "react";
import Col from "../../components/Layout/Col";
import Input from "../../components/Form/Input";
import Checkbox from "../../components/Form/Checkbox";

export default  class SupplierSignup extends Component {
    state = {
        firstName: "",
    }

    formInput = [
        { type: "text", name: "first-name",},
        { type: "text", name: "last-name",},
        { type: "text", name: "job-title",},
        { type: "text", name: "company-name",},
        { type: "text", name: "address",},
        { type: "text", name: "state-or-province",},
        { type: "text", name: "city",},
        { type: "text", name: "postal-code",},
        { type: "text", name: "mobile-number",},
        { type: "text", name: "office-number",},
        { type: "text", name: "email",},
        { type: "text", name: "employee-size",},
        { type: "text", name: "year-founded",},
        { type: "text", name: "number-of-locations",},
        { type: "text", name: "annual-sales",},
        { type: "text", name: "quality-certifications",},
        { type: "checkbox", name: "diversity-and_ownership", choices: [{name: "veteran-owned", checked: false}, {name: "minority-owned", checked: false}, {name: "woman-owned", checked: false}, {name: "buy-america-company", checked: false}]},
        { type: "checkbox", name: "portfolio", choices: [{name: "portfolio", checked: false}] },
    ]

    render(){
        return(
            <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
                <form>
                    {this.formInput.map(({name, type, choices, label}) => {
                        const displayName = name.replace(/-/g, " ");
                        return (
                            <Fragment>
                                {(type === "text") && <Input key={name}type={type} inputId={name} inputClass="text-capitalize" placeholder={displayName} />}
                                {(type === "checkbox") && <Checkbox key={name} type={type} label={displayName} inputClass="text-capitalize" checkboxList={choices}  />}
                            </Fragment>
                        )
                    })}
                </form>
            </Col>
        );
    }
}

// type, placeholder, inputClass, formGroup, inputId, label