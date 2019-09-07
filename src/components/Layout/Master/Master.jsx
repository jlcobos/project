import React from "react";
import Container from "../Container";
import TopNav from "../TopNav";
import MainHeader from "../MainHeader";
import Footer from "../Footer";

export default function Master({children}){
    return (
        <Container>
            <TopNav />
            <MainHeader />
            {children}
            <Footer/>
        </Container>
    )
}