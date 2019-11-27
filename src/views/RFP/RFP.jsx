import React from "react";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";
// variant, action, buttonClass, text
// TODO: deadline for submittal, document specification upload
//
const RFP = () => {
    // TODO: create draft mode for status before submitting.
    // TODO: user can save as draft if not submitting right away
    return(
        <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
            <Context.Consumer>
            {({draftRfp, forms: {initializeRFPForm},...rest}) => {
                    return <Form form={initializeRFPForm} formName={initializeRFPForm.formName} {...rest} />
                }}
            </Context.Consumer>
        </Col>
    );
}

export default RFP;