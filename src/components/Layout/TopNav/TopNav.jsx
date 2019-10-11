import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";

export default class TopNav extends Component {

    navList = [
        {
            to: "/",
            text: "Home",
        },
        {
            to: "/suppliers/rfp",
            text: "RFP",
        },
        {
            to: "/suppliers/signup",
            text: "Supplier Signup",
        },
        {
            to: "/tier/:tier/seats/search",
            text: "Search",
        },
    ]

    renderNavLinks(){
        return (
            <ul className="nav justify-content-end">
                {this.navList.map(navItem => {
                    return (
                        <li key={navItem.text} className="nav-item"> 
                            <NavLink className="nav-link font-italic" to={navItem.to}>{navItem.text}</NavLink> 
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