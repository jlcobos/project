import React, { useEffect } from "react";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";

// TODO: clean up form on unmount
const OrganizationSignup = () => {
    return(
        <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
            <Context.Consumer>
                {({getComponentsList,forms: {organizationSignupForm},...rest}) => {
                    return <Form form={organizationSignupForm} formName={organizationSignupForm.formName} {...rest} />
                }}
            </Context.Consumer>
        </Col>
    );
}

export default OrganizationSignup;