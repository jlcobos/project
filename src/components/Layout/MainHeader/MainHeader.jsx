import React from "react";
import Row from "../Row";
import Col from "../Col";

export default function MainHeader({headerText, subText}){
    return(
        <Row rowClass="row mt-1">
            <Col colClass="col-md-12">
                <h1 className="text-center" data-pgc-edit="page-header">{headerText}</h1> 
                {subText && <p className="text-center" data-pgc-edit="page-header-subtext">{subText}</p>}
            </Col>
        </Row>
    );
}