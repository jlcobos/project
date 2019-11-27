import React, { Component } from "react"
import { Context } from "../../context/context";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";
import List from "../../components/List";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal";

// TODO: on backend: still check if user s authorized to create an rfp;

export default function Organization() {




    return (
        <Col  colSize="col-12" colClass="col-xs-12">
            <Context.Consumer>
                {({organization, currentRFPs, forms: {rfpMessageForm}, ...rest}) => {
                    return (
                        <React.Fragment>
                            <Row>
                                <h1>{organization.name}</h1>
                            </Row>
                            <Row>
                                <Col colClass={"col-xs-12 col-md-6"}>
                                <h2 className={"mt-5"}>Current RFP's</h2>
                                    <List 
                                        items={
                                            currentRFPs.map((rfp) => <RFP 
                                                                            rfp={rfp.rfp}
                                                                            form={<Form form={rfpMessageForm} formName={rfpMessageForm.formName} {...rest} />}
                                                                        />
                                                                    )}
                                    />
                                </Col>
                            </Row>
                        </React.Fragment>
                    )
                }}
            </Context.Consumer>
        </Col>
    )
}

function RFP({rfp, form}) {
    return  <React.Fragment>
                <h4>Title: {rfp.rfpTitle || "No Title"}</h4>
                <p>Status: {rfp.status}</p>
                {/* <p>Date Created: {rfp.dateCreated}</p>
                <p>Last Updated: {rfp.dateUpdated}</p> */}
                <Modal 
                    modalOpenText={"New Message"}
                    headerText={"New Message For: " }
                    actionText={"Send"}
                >
                    {form}
                </Modal>
            </React.Fragment>
}