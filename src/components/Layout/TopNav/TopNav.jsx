import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/context";
import Row from "../Row";
import Col from "../Col";

export default class TopNav extends Component {

    navList = [
        {
            to: "/",
            text: "Home",
        },
        {
            to: "/login",
            text: "Login",
        },
        {
            to: "/signup",
            text: "Signup",
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

    logoutLink(){
        return (
            <Context.Consumer>
                {({currentUser, logout}) => {
                    return currentUser ? <button onClick={() => logout()}>{"logout"}</button> : null;
                }}
            </Context.Consumer>
        )
    }

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
                {this.logoutLink()}
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