import React, { Component, useEffect, useContext, useState } from "react"
import { Context } from "../../context/context";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";
import List from "../../components/List";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal";

// TODO: on backend: still check if user s authorized to create an rfp;

export default function Organization() {
    const {organization, currentRFPs, forms: { rfpMessageForm }, toggleFlag, rfpActive, currentUser, ...rest} = useContext(Context)
    useEffect( () => { if (rfpActive) toggleFlag("rfpActive", false) });

    return (
        <Col  colSize="col-12" colClass="col-xs-12">
            <Row>
                <h1>{organization.name}</h1>
            </Row>
            <Row>
                <Col colClass={"col-xs-12 col-md-6"}>
                <h2 className={"mt-5"}>Current RFP's</h2>
                    <List 
                        items={
                            currentRFPs && currentRFPs.map((rfp) => {
                                return (
                                    <RFP 
                                        rfp={rfp.rfp}
                                        rfpId={rfp.id}
                                        orgId={organization.id}
                                        currentUserId={currentUser.uid}
                                        form={<Form form={rfpMessageForm} formName={rfpMessageForm.formName} {...rest} />}
                                    />
                                )
                            })}
                    />
                </Col>
            </Row>
        </Col>
    )
}

function RFP({rfp, rfpId, form, orgId, currentUserId}) { // TODO: if rfp closed: remove all possible actions
    const { prefillFormField } = useContext(Context);

    function setupMessage (args) {
        const data = [
            { name: "rfpId", value: args.rfpId },
            { name: "receivingOrganizationId", value: args.receivingOrganizationId },
            { name: "sendingOrganizationId", value: args.sendingOrganizationId },
            { name: "senderUID", value: args.senderUID },
        ];

        data.forEach(item => prefillFormField(item.name, item.value, "rfpMessageForm"));
    }

    // sendingOrganizationId - orgId
    // senderUID - currentUser
    // receivingOrganizationId - bidder.organizationId
    return  <React.Fragment>
                <h4>Title: {rfp.rfpTitle || "No Title"}</h4>
                <p>Status: {rfp.status}</p>
                {rfp.bidders.map((bidder) => {
                    return (
                        <div key={bidder.organizationId}>
                            <p>{bidder.organizationName}</p>
                            <button 
                                type="button" 
                                className="btn btn-link" 
                                data-toggle="modal" 
                                data-target="#modal"
                                onClick={() => setupMessage({
                                    rfpId: rfpId,
                                    receivingOrganizationId: bidder.organizationId,
                                    sendingOrganizationId: orgId,
                                    senderUID: currentUserId,
                                })}
                            >
                                    New Message
                            </button>
                        </div>
                    )
                })}
                <Modal 
                    headerText={"New Message For: " }
                    actionText={"Send"}
                >
                    {form}
                </Modal>
                {/* <p>Date Created: {rfp.dateCreated}</p>
                <p>Last Updated: {rfp.dateUpdated}</p> */}
            </React.Fragment>
}