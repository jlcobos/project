import React, {Component} from "react";
import { Context } from "../../context/context";
import Linkify from 'linkifyjs/react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class  extends Component {

    state = {
        tier: this.props.match.params.tier,
        component: this.props.match.params.component,
        requirements: this.props.match.params.requirements,
    }

    render(){
        const options = {
            format: (value) => {
                value = value.split("***")
                return value[value.length - 1]
            },
            formatHref: (value) => {
                return value.split("***")[0]
            }
        }
        
        return(
            <Row>
                <Col>
                    <Context.Consumer>
                        { ({data}) => {
                            const reqs = data[`tier${this.state.tier}`].requirements.components.find(comp => comp.name === this.state.component);
                            const textList = reqs.requirements.find(req => req.name === this.state.requirements).text;
                            return (
                                <div>
                                    {textList.map((text, index) => {
                                        return <Linkify key={index} options={options} tagname="p">{text}</Linkify>
                                        })
                                    }
                                </div>
                            )}
                        }                
                    </Context.Consumer>
                </Col>
            </Row>
        );
    }
}