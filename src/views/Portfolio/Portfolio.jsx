import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Portfolio extends Component {
    state = {
        supplier: this.props.match.params.supplier
    }

    render(){
        return(
            <Row>
                <Col>
                    <p className="text-capitalize">{`${this.state.supplier.split("-").join(" ")} Contact and Portfolio Page`}</p>
                </Col>
            </Row>
        );
    }
}