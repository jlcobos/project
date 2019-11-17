import React from "react";
import Col from "../../components/Layout/Col";
import Form from "../../components/Form/Form";
import { Context } from "../../context/context";

const UserHome = () => {
    return(
        <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
            <Context.Consumer>
            {({currentUserEmail, companyInfo}) => {
                    return (
                        <div>
                            <p>Welcome {currentUserEmail}</p>
                            <p>{companyInfo ? companyInfo.name : "Click here to find your company"}</p>
                        </div>
                    )
                }}
            </Context.Consumer>
        </Col>
    );
}

export default UserHome;