import React from "react";
import { Redirect } from "react-router";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";
// variant, action, buttonClass, text
// TODO: deadline for submittal, document specification upload
//
export default function Signup() {
    return(
        <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
            <Context.Consumer>
            {({currentUser, forms: {signupForm},...rest}) => {
                if(currentUser) return  <Redirect to="/home" />;
                return <Form form={signupForm} formName={signupForm.formName} {...rest} />
                }}
            </Context.Consumer>
        </Col>
    );
}