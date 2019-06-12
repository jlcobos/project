import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar(){
    const links = [
        {to: "/", text: "Home", icon: "home"},
        // {to: "/link2", text: "Link2"},
        // {to: "/link3", text: "Link3"},
    ] 
    return (
        <Nav as="ul" className="fixed bg-light">
            {links.map(({to, text, icon}, index) => {
                return (
                    <Nav.Item as="li" className="p-1" key={index}>
                        <Nav.Link as="p" className="p-0 m-0">
                            <NavLink className="text-dark pointer p-0" to={to}>
                                <FontAwesomeIcon icon={icon} size="2x"/> 
                            </NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    )
                })
            }
            <h4 className="m-0 py-1 px-3 mt-auto mr-auto">{" Coach Requirements"}</h4>
        </Nav>
    )
}