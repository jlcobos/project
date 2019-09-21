import React from "react";
import Row from "../Row";
import Col from "../Col";

export default function Footer({footerClass}){
    return (
        <Row>
            <Col colClass={`col-12 d-flex justify-content-center ${footerClass !== undefined ? footerClass : ""}`}>
                <p className="align-self-center p-1 m-0">Rail Project Copyright 2019</p> 
            </Col>
        </Row>
    )
}