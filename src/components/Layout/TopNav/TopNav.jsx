import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/context";
import Row from "../Row";
import Col from "../Col";

export default withRouter(function TopNav(props) {

    const navLinks = [
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
            to: "/supplier-search",
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
        // {
        //     to: "/initialize-rfp",
        //     text: "RFP",
        //     protected: true,
        // },
    ]
    function logoutLink(){
        return (
            <Context.Consumer>
                {({currentUser, logout}) => {
                    return currentUser ? <NavLink className="nav-link font-italic" onClick={e => e.preventDefault()}>{"logout"}</NavLink> : null;
                }}
            </Context.Consumer>
        )
    }

    function renderNavLinks(){
        let currentNavLinks = [];
        return (
            <Context.Consumer>
                {({logout, organization, isLoggedIn}) => {

                    currentNavLinks = navLinks.filter((link) => link.to !== props.location.pathname);

                    if(isLoggedIn && Boolean(organization)) currentNavLinks = currentNavLinks.filter(n => n.to !== "/organization/signup")
                    else if(isLoggedIn && !Boolean(organization)) currentNavLinks = currentNavLinks.filter(n => n.to !== "/organization/home");

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

    return(
        <Row>
            <Col colClass={"col-xs-12"}>
                {renderNavLinks()}
            </Col>
        </Row>
    );
})