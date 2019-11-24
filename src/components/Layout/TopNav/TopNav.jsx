import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/context";
import Row from "../Row";
import Col from "../Col";

export default class TopNav extends Component {

    navLinks = [
        {
            to: "/home",
            text: "Home",
            protected: true,
        },
        {
            to: "/organization/signup",
            text: "Organization Signup",
            protected: true,
        },
        {
            to: "/organization/home",
            text: "Organization Account",
            protected: true,
        },
        {
            to: "/tier-selection",
            text: "Tier Selection",
            protected: true,
        },
        {
            to: "/tier/:tier/seats/search",
            text: "Search",
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
        let currentNavLinks;
        return (
            <Context.Consumer>
                {({logout, organization, isLoggedIn}) => {
                    console.log(this.navLinks);
                    console.log(Boolean(organization));
                    if(organization) currentNavLinks = this.navLinks.filter(n => n.to !== "/organization/signup");
                    if(!Boolean(organization)) currentNavLinks = this.navLinks.filter(n => n.to !== "/organization/home");
                    return (
                        <ul className="nav justify-content-end">
                            {currentNavLinks.map(navItem => {
                                if (isLoggedIn && navItem.protected) {
                                    return (
                                    <li key={navItem.text} className="nav-item"> 
                                        <NavLink className="nav-link font-italic" to={navItem.to}>{navItem.text}</NavLink> 
                                    </li> 
                                )
                                } else if (!isLoggedIn && !navItem.protected) {
                                    return (
                                        <li key={navItem.text} className="nav-item"> 
                                            <NavLink className="nav-link font-italic" to={navItem.to}>{navItem.text}</NavLink> 
                                        </li> 
                                    )
                                }       
                            })}
                            {isLoggedIn && 
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