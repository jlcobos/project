import React, { Component } from "react"
import Col from "../../components/Layout/Col";

export default class Organization extends Component {
    render(){
		return (
            <Col key={i} colSize="col-12" colClass="d-flex justify-content-center align-items-center">
                <p>Users</p>
                <p>Bid Requests</p>
            </Col>
        )
    }
}