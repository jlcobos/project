import React, {Component} from "react";
import { Context } from "../../context/context";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Components from "../Components/Components";

export default class Suppliers extends Component {
    state = {
        tier: this.props.match.params.tier,
        component: this.props.match.params.component,
    }

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
                            <Context.Consumer>
                                {({data: { [`tier${this.state.tier}`]: { requirements: {components} } }}) => {
                                        const suppliers = components.find(c => c.name === this.state.component).suppliers
                                    return suppliers.map((supplier, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{supplier.name}</td>
                                                <td>{supplier.fstCompliant}</td>
                                                <td>{supplier.buyUSA}</td>
                                                <td>
                                                    <NavLink to={`/portfolio/${supplier.name}`}>Portfolio</NavLink>
                                                </td>
                                            </tr>

                                            )
                                        })
                                    }
                                }
                            </Context.Consumer>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}