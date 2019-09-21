import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Col from "../../components/Layout/Col";
import Card from "../../components/Card";
import { Context } from "../../context/context.js";

export default class TierView extends Component {
    render() {
        const { params } = this.props.match;
        return (
            <Context.Consumer>
                { 
                    ({data}) => {
                        const { general, components } = data[`tier${params.tier}`];
                        return [...general, ...components].map(({param, name},i) => {                          
                            return (
                                <Col key={i} colSize="col-6 col-md-3 col-sm-4" colClass="d-flex justify-content-center align-items-center">
                                    <Card 
                                        cardClass="square200 secondary"
                                        textCenter  
                                        withTitle 
                                        title={name}
                                        withNavFooter
                                        navFooterText="Requirements"
                                        navPath={`/tier/${params.tier}/${param}/requirements`}
                                    />
                                </Col>
                            )
                        })
                    }
                }
            </Context.Consumer>
        )
    }
}