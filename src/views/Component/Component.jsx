import React from "react";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Context } from "../../context/context";

export default class Component extends React.Component {
    renderRequirementLinks = () => {
        const { params } = this.props.match;
        return (
            <Context.Consumer>
                {({data}) => {
                    const { requirements } = data[`tier${params.tier}`].requirements.components.find(c => c.name === params.component)
                        return requirements.map((req, i) => {
                            return (
                                <NavLink key={i} className={["d-block w-100 my-2"].join(" ")} to={`/components/tier/${params.tier}/${params.component}/${req.name}`}>
                                    <Button variant={req.name === "suppliers" ? "warning" : "primary"} className={["w-100 text-capitalize"].join(" ")}>
                                        {req.displayName}
                                    </Button>
                                </NavLink>
                            )
                    })
                }}
            </Context.Consumer>
        )
    }

    renderSupplierLink = () => {
        const { params } = this.props.match;
        return (
            <NavLink className={["d-block w-100 my-2"].join(" ")} to={`/components/tier/${params.tier}/${params.component}/suppliers`}>
                <Button variant={"warning"} className={["w-100 text-capitalize"].join(" ")}>
                    Suppliers
                </Button>
            </NavLink>
        )
    }

    render(){
        const { params } = this.props.match;
        return(
            <Row>
                <Col xs={12} className="py-2">
                    <p className="text-center text-capitalize my-0">{`Tier ${params.tier} ${params.component} Requirement Categories`}</p>
                </Col>
                <Col xs={12} className="d-flex flex-wrap justify-content-center">
                    {this.renderRequirementLinks()}
                    {this.renderSupplierLink()}
                </Col>
            </Row>
        );
    }
}