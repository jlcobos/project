import React, {Component} from "react";
import { Context } from "../../context/context";
import { NavLink } from "react-router-dom";
import Row from "../../components/Layout/Row";
import Col from "../../components/Layout/Col";

export default class Suppliers extends Component {
    render(){
        const { params } = this.props.match;
        return(
            <Row>
                <Col>
                    <p className={["text-center"].join(" ")} >Suppliers</p>
                    {/* <Table striped bordered hover size="sm" variant="dark"> */}
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
                                {({data: { [`tier${params.tier}`]: { requirements: {components} } }}) => {
                                    const suppliers = components.find(c => c.name === params.component).suppliers;
                                    return suppliers.map((supplier, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{supplier.name}</td>
                                                <td>{supplier.fstCompliant}</td>
                                                <td>{supplier.buyUSA}</td>
                                                <td>
                                                    <NavLink to={`/components/tier/${params.tier}/${params.component}/suppliers/${supplier.name}`}>Portfolio</NavLink>
                                                </td>
                                            </tr>
                                            )
                                        })
                                    }
                                }
                            </Context.Consumer>
                        </tbody>
                    {/* </Table> */}
                </Col>
            </Row>
        );
    }
}