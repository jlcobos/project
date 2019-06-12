import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavButton from "../NavButton";

export default function BottomNav(props){
    return (
        <Row>
            <Col className="d-flex justify-content-between fixed-bottom py-2 mb-0 bg-light" >
                <NavButton left={true}  {...props} />
                <NavButton left={false} {...props} />
            </Col>
        </Row>
    )
}