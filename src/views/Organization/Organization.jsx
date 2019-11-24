import React, { Component } from "react"
import { Context } from "../../context/context";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";

export default class Organization extends Component {
    render(){
		return (
            <Col  colSize="col-12" colClass="col-xs-12">
                <Context.Consumer>
                    {({organization}) => {
                        return (
                            <Row>
                                <h1>{organization.name}</h1>
                            </Row>
                        )
                    }}
                </Context.Consumer>
            </Col>
        )
    }
}