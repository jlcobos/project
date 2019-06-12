import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavButton extends Component {
    render(){
        const { history: { goBack, goForward }, left } = this.props;
        return (
            <Button onClick={() => left ? goBack() : goForward()} >
                <FontAwesomeIcon icon={left ? "chevron-left" : "chevron-right"} size="2x"/> 
            </Button>
        )
    }
}