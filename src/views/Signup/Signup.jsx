import React from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
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
                return <Form 
                            title="Signup" 
                            form={signupForm} 
                            formName={signupForm.formName} 
                            {...rest}
                            withFooter
                            footerWrapperClass="text-center"
                            footerNode={<p className="ml-3" >Already have an account? Login <NavLink className="text-primary" to="/login">here</NavLink></p>} 
                        />
                }}
            </Context.Consumer>
        </Col>
    );
}