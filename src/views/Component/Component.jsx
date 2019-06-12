import React from "react";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Context } from "../../context/context";

export default class Component extends React.Component {
    state = {
        tier: this.props.match.params.tier,
        component: this.props.match.params.component,
    }

    renderRequirements = () => {
        return (
            <Context.Consumer>
                {({data}) => {
                    const { requirements } = data[`tier${this.state.tier}`].requirements.components.find(c => c.name === this.state.component)
                        return requirements.map((req, i) => {
                            return (
                                <NavLink key={i} className={["d-block w-100 my-2"].join(" ")} to={`/components/tier/${this.state.tier}/${this.state.component}/${req.requirement}`}>
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

    render(){
        return(
            <Row>
                <Col xs={12} className="py-2">
                    <p className="text-center text-capitalize my-0">{`Tier ${this.state.tier} ${this.state.component} Requirements`}</p>
                </Col>
                <Col xs={12} className="d-flex flex-wrap justify-content-center">
                    {this.renderRequirements()}
                </Col>
            </Row>
        );
    }
}