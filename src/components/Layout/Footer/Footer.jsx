import React from "react";
import Row from "../Row";
import Col from "../Col";

export default function Footer(){
    return (
        <Row>
            <Col colClass={"col-12 d-flex justfy-content-center"}>
                <p class="align-self-center p-1 m-0">Rail Project copyright 2019</p> 
            </Col>
        </Row>
    )
}