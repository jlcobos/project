import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Col from "../../components/Layout/Col";
import Card from "../../components/Card";
import { Context } from "../../context/context.js";

export default class ComponentsList extends Component {
    render() {
        const { params } = this.props.match;
        return (
            <Context.Consumer>
                { ({data}) =>
                    data[`tier${params.tier}`].requirements.components.map(({name, displayName}) => {
                        return (
                            <Col colSize="col-6 col-md-3 col-sm-4" colClass="d-flex justify-content-center align-items-center">
                                <NavLink key={name} className=" " to={`/tier/${params.tier}/components/${name}`}>
                                    <Card withTitle title={displayName}/>
                                </NavLink>
                            </Col>
                        )
                    })
                }
            </Context.Consumer>
        )
    }
}