import React, { Component, Fragment } from "react";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";
// variant, action, buttonClass, text
// TODO: deadline for submittal, document specification upload
//
export default class Login extends Component {
    render(){
        console.log(this.props)
        return(
            <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
                <Context.Consumer>
                    {({forms: {loginForm},...rest}) => {
                        return <Form form={loginForm} formName={"loginForm"} {...rest} />
                    }}
                </Context.Consumer>
            </Col>
        );
    }
}