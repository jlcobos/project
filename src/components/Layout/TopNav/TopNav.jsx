import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/context";
import Row from "../Row";
import Col from "../Col";

export default class TopNav extends Component {

    navList = [
        {
            to: "/home",
            text: "Home",
            protected: true,
        },
        {
            to: "/tier-selection",
            text: "Tier Selection",
            protected: true,
        },
        {
            to: "/login",
            text: "Login",
            protected: false,
        },
        {
            to: "/signup",
            text: "Signup",
            protected: false,
        },
        {
            to: "/suppliers/rfp",
            text: "RFP",
            protected: true,
        },
        {
            to: "/organization/signup",
            text: "Organization Signup",
            protected: true,
        },
        {
            to: "/tier/:tier/seats/search",
            text: "Search",
            protected: true,
        },
    ]

    logoutLink(){
        return (
            <Context.Consumer>
                {({currentUser, logout}) => {
                    return currentUser ? <NavLink className="nav-link font-italic" onClick={e => e.preventDefault()}>{"logout"}</NavLink> : null;
                }}
            </Context.Consumer>
        )
    }

    renderNavLinks(){
        return (
            <Context.Consumer>
                {({currentUser, logout}) => {
                    return (
                        <ul className="nav justify-content-end">
                            {this.navList.map(navItem => {
                                if (currentUser && navItem.protected === true) {
                                    return (
                                    <li key={navItem.text} className="nav-item"> 
                                        <NavLink className="nav-link font-italic" to={navItem.to}>{navItem.text}</NavLink> 
                                    </li> 
                                )
                                } else if (!currentUser && !navItem.protected) {
                                    return (
                                        <li key={navItem.text} className="nav-item"> 
                                            <NavLink className="nav-link font-italic" to={navItem.to}>{navItem.text}</NavLink> 
                                        </li> 
                                    )
                                }       
                            })}
                            {currentUser && 
                                <NavLink 
                                    className="nav-link font-italic" 
                                    to="/" 
                                    onClick={e => {
                                        e.preventDefault();
                                        logout();
                                }}>
                                    {"Logout"}
                                </NavLink>
                            } 
                        </ul>
                    )
                }}
            </Context.Consumer> 
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