import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export default class Suppliers extends Component {

    render(){
        return(
            <Row>
                <Col>
                <p className={["text-center"].join(" ")} >Suppliers</p>
                <Table striped bordered hover size="sm" variant="dark">
    <thead>
        <tr>
            <th>Supplier</th>
            <th>FST Compliant</th>
            <th>Buy America?</th>
            <th>Portfolio & Contact</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ABC Corp</td>
            <td>Potential</td>
            <td>Yes</td>
            <td>
                <NavLink to={"/portfolio/abc-corp"}>Portfolio</NavLink>
            </td>
        </tr>
        <tr>
            <td>DEF Corp</td>
            <td>No</td>
            <td>No</td>
            <td>
                <NavLink to={"/portfolio/def-corp"}>Portfolio</NavLink>
            </td>
        </tr>
        <tr>
            <td>GHI Corp</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                <NavLink to={"/portfolio/ghi-corp"}>Portfolio</NavLink>
            </td>
        </tr>

    </tbody>
</Table>
                </Col>
            </Row>
        );
    }
}