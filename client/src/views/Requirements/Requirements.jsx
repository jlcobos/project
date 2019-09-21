import React, {Component} from "react";
import { Context } from "../../context/context";
import RequirementText from "../../components/Requirements";
// import Linkify from 'linkifyjs/react';
import Col from "../../components/Layout/Col";

export default class Requirements  extends Component {
    render(){
        const { params } = this.props.match;       
        return(
            <Context.Consumer>
                { 
                    ({data: { [`tier${params.tier}`]:  {general, components }  }}) => {
                        const reqs = [...general, ...components].find(x => x.param === params.component);
                        const { name, subTitle, paragraphs } = reqs;                        
                        return (
                            <Col colClass="col-12 col-lg-10 offset-lg-1 overflow-auto p-3">
                                <h3>{name}  <small>{subTitle}</small></h3>
                                <RequirementText paragraphs={paragraphs} />
                            </Col>
                        )
                    }
                }                
            </Context.Consumer>
        );
    }
}