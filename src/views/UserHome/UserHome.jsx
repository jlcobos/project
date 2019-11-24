import React from "react";
import Col from "../../components/Layout/Col";
import { Context } from "../../context/context";

const UserHome = () => {
    return(
        <Col colSize={`col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3`}>
            <Context.Consumer>
            {({currentUser}) => {
                    return (
                        <div>
                            <p>Welcome {currentUser.email}</p>
                            {/* <p>{organization ? organization.name : ""}</p> */}
                        </div>
                    )
                }}
            </Context.Consumer>
        </Col>
    );
}

export default UserHome;