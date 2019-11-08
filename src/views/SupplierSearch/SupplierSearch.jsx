import React, {Component} from "react";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";

export default class SupplierSearch extends Component {
    render(){
        return(
            <Col colClass="col-xs-12 col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-lg-2">
                <Context.Consumer>
                {({forms: {supplierSearchForm},...rest}) => {
                        return <Form form={supplierSearchForm} formName={supplierSearchForm.formName} {...rest} />
                    }}
                </Context.Consumer>
            </Col>
        );
    }
}