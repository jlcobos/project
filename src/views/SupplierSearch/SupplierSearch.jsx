import React, {Component} from "react";
import Col from "../../components/Layout/Col";
import Input from "../../components/Form/Input";
import Checkbox from "../../components/Form/Checkbox";
import Dropdown from "../../components/Form/Dropdown";

export default class SupplierSearch extends Component {

    state = {
        checkboxList: {
            ["all"]: false,
            ["buy-america"]: false,
            ["by-america"]: false,
            ["woman-owned"]: false,
            ["minority-owned"]: false,
            ["green-certified"]: false,
            ["established-product"]: false,
            ["iso-certified"]: false,
            ["local"]: false,
        },
        yearsInOp: {
            name: "years-in-operation",
            values: new Array(100).fill().map((_, i) => i + 1),
            ["years-in-operation"]: null,
        }
    }



    handleValueChange = (e) => {
        const { name, value, type, checked } = e.target;
        const checkboxList = {...this.state.checkboxList} 
        if (type === "checkbox") {
            checkboxList[name] = checked
            this.setState({checkboxList: checkboxList})
        } else {
            console.log(name, value)
            this.setState({[name]: value});
            e.preventDefault();
            
        }
    }

    checkState(){
        console.log(this.state);
    }

    render(){
        return(
            <Col colClass="col-xs-12 col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-lg-2">
                <form>
                    <Checkbox action={this.handleValueChange} checkboxList={this.state.checkboxList} />
                    <Dropdown displayText={this.state.yearsInOp.name} action={this.handleValueChange}  values={this.state.yearsInOp.values} />
                </form>
                <button type="button" onClick={() => this.checkState()}>Check Form State</button>
            </Col>
        );
    }
}