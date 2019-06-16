import React, {Component} from "react";
import { Context } from "../../context/context";
import Linkify from 'linkifyjs/react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Requirements  extends Component {
    render(){
        const { params } = this.props.match;
        const options = {
            format: value => {
                value = value.split("***")
                return value[value.length - 1]
            },
            formatHref: value => value.split("***")[0]
        }        
        return(
            <Row>
                <Col>
                    <Context.Consumer>
                        { ({data: { [`tier${params.tier}`]: { requirements: { components } } }}) => {
                            const component = components.find(comp => comp.name === params.component);
                            const textList = component.requirements.find(requirement => requirement.name === params.requirements).text;
                            return textList.map((text, index) => <Linkify key={index} options={options} tagname="p">{text}</Linkify>
                            )}
                        }                
                    </Context.Consumer>
                </Col>
            </Row>
        );
    }
}