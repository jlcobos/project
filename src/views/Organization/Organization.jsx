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
                <Col colClass={"col-xs-12 col-md-12"}>
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
    const [orgName, setOrgName] = useState("");

    function setupMessage (bidderOrganizationId) {
        const data = [
            { name: "rfpId", value: rfpId },
            { name: "receivingOrganizationId", value: bidderOrganizationId },
            { name: "sendingOrganizationId", value: orgId },
            { name: "senderUID", value: currentUserId },
        ];

        data.forEach(item => prefillFormField(item.name, item.value, "rfpMessageForm"));
    }

    return  <React.Fragment>
                <h4>Title: {rfp.rfpTitle || "No Title"}</h4>
                <p>Status: {rfp.status}</p>
                {rfp.bidders.map((bidder) => {
                    return <Bidder
                            key={bidder.organizationId} 
                            bidder={bidder} 
                            messages={rfp.messages.filter((message) => message.receivingOrganizationId === bidder.organizationId)} 
                            setupMessage={setupMessage}
                            setOrgName={setOrgName}
                        />
                })}
                <Modal 
                    headerText={`New Message For:   ${orgName}`}
                    actionText={"Send"}
                >
                    {form}
                </Modal>
            </React.Fragment>
}

function Bidder({bidder, messages, setupMessage, setOrgName}) {

    const [showMessages, setShowMessages] = useState(false);

    return (
        <div key={bidder.organizationId}>
            <p>{bidder.organizationName}</p>
            <button type="button" className="btn btn-link" onClick={() => setShowMessages(!showMessages) }>{showMessages ? "Close Messages" : "Show Messages"}</button>
            {showMessages && <Messages messages={messages} />}
            <button 
                type="button" 
                className="btn btn-link" 
                data-toggle="modal" 
                data-target="#modal"
                onClick={() => {
                    setupMessage(bidder.organizationId);
                    setOrgName(bidder.organizationName);
                }
                }
            >
                    New Message
            </button>
        </div>
    )
}

function Messages({messages}){
    return (
        <ul>
            {messages.map((message, i) => {
                return (
                    <li key={i}>
                        <h5>{message.subject}</h5>
                        <p>{message.message}</p>
                    </li>
                ) 
            })}
        </ul>
    )
}