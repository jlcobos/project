import React, {Component} from "react";
import Col from "../../components/Layout/Col";
import Input from "../../components/Form/Input";
import Checkbox from "../../components/Form/Checkbox";
import Dropdown from "../../components/Form/Dropdown";

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
                <form>
                    {/* <Checkbox action={this.handleValueChange} checkboxList={this.state.checkboxList} />
                    <Dropdown name={this.state.yearsInOp.name} action={this.handleValueChange}  values={this.state.yearsInOp.values} /> */}
                </form>
            </Col>
        );
    }
}