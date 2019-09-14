import React, {Component} from "react";
import { Context } from "../../context/context";
import RequirementText from "../../components/Requirements";
// import Linkify from 'linkifyjs/react';
import Col from "../../components/Layout/Col";

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
            <Context.Consumer>
                    { ({data: { [`tier${params.tier}`]: { requirements: { components } } }}) => {
                        const component = components.find(component => component.name === params.component);
                        const text = component.requirements.find(requirement => requirement.name === params.requirements).text;
                        return (
                            <Col colClass="col-12 col-lg-10 offset-lg-1 overflow-auto p-3">
                                <h1>{text.pageTitle}</h1>
                                <h3>{text.title}  <sm>{text.subTitle}</sm></h3>
                                <RequirementText paragraphs={text.paragraphs} />
                            </Col>
                        )
                    }
                    }                
                </Context.Consumer>
        );
    }
}