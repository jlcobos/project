import React from "react";
import Container from "../Container";
import Row from "../Row";
import TopNav from "../TopNav";
import MainHeader from "../MainHeader";
import Footer from "../Footer";

export default function Master({children}){
    return (
        <Container>
            <TopNav />
            <MainHeader />
            <Row rowClass="flex-fill flex-row overflow-auto">
                {children}
            </Row>    
            <Footer/>
        </Container>
    )
}