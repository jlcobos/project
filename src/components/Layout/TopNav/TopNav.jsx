import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";

export default class TopNav extends Component {

    navList = [
        {
            to: "/contact",
            text: "Contact",
        },
        {
            to: "/about",
            text: "About",
        },
        {
            to: "/account",
            text: "Account",
        },
    ]

    renderNavLinks(){
        return (
            <ul className="nav justify-content-end">
                {this.navList.map(navItem => {
                    return (
                        <li key={navItem.text} className="nav-item"> 
                            <NavLink className="nav-link text-white font-italic" to={navItem.to}>{navItem.text}</NavLink> 
                        </li> 
                    )        
                })}
            </ul>  
        )
    }

    render(){
        return(
            <Row>
                <Col colClass={"col-xs-12"}>
                    {this.renderNavLinks()}
                </Col>
            </Row>
        );
    }
}