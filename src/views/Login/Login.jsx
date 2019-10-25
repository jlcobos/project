import React, { Component, Fragment } from "react";
import { Redirect } from "react-router";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";
// variant, action, buttonClass, text
// TODO: deadline for submittal, document specification upload
//
function Login() {
    return (
        <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
            <Context.Consumer>
                {({currentUser, forms: {loginForm},...rest}) => {
                    if(currentUser) return  <Redirect to="/" />
                    return <Form form={loginForm} formName={"loginForm"} {...rest} />
                }}
            </Context.Consumer>
        </Col>
    );
}

export default Login;