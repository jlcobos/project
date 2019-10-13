import React, {Component} from "react";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";

export default class SupplierSearch extends Component {

    handleValueChange = (e) => {
        const { name, value, type, checked } = e.target;
        const checkboxList = [...this.state.checkboxList]; 
        if (type === "checkbox") {
            const index = checkboxList.findIndex(item => item.name === name);
            checkboxList[index].checked = checked;
            this.setState({checkboxList: checkboxList})
        } else {
            const years = {...this.state.yearsInOp};
            years[name] = value;
            this.setState({yearsInOp: years});
            e.preventDefault();
            
        }
    }

    render(){
        return(
            <Col colClass="col-xs-12 col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-lg-2">
                <Context.Consumer>
                    {({state: {supplierSearchFormAndData: {supplierSearchForm, supplierSearchFormData}},handleOnChange, handleOnBlur, handleSubmit}) => {
                        console.log(handleOnChange);
                        return <Form form={supplierSearchForm} formState={supplierSearchFormData} handleOnChange={handleOnChange} handleOnBlur={handleOnBlur} handleSubmit={handleSubmit} />
                    }}
                </Context.Consumer>
            </Col>
        );
    }
}