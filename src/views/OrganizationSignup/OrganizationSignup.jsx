import React from "react";
import { Redirect } from "react-router-dom";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";

// TODO: clean up form on unmount
// TODO: hide link and add message if user is already part of an organization
const OrganizationSignup = () => {
    return(
        <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
            <Context.Consumer>
                {({getComponentsList,forms: {organizationSignupForm}, organization,...rest}) => {
                    if (organization) {
                        return <Redirect to={"/organization/home"} />
                    } else {
                        return <Form title="Organization Signup" form={organizationSignupForm} formName={organizationSignupForm.formName} {...rest} />
                    }
                }}
            </Context.Consumer>
        </Col>
    );
}

export default OrganizationSignup;