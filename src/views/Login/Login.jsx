import React from "react";
import { NavLink } from "react-router-dom";
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
                    if(currentUser) return  <Redirect to="/home" />
                    return <Form 
                                title="login" 
                                form={loginForm} 
                                formName={"loginForm"} 
                                {...rest} 
                                withFooter
                            footerWrapperClass="text-center"
                            footerNode={<p className="ml-3" >Don't have an account? Signup <NavLink className="text-primary" to="/signup">Here</NavLink></p>} 
                            />
                }}
            </Context.Consumer>
        </Col>
    );
}

export default Login;