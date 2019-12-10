import React, { Component, useEffect, useContext, useState } from "react"
import { Context } from "../../context/context";
import BuyerRFPView from "./BuyerRFPView";
import SupplierRFPView from "./SupplierRFPView";
import Col from "../../components/Layout/Col";
import Row from "../../components/Layout/Row";
import List from "../../components/List";
import Form from "../../components/Form/Form";

// TODO: on backend: still check if user s authorized to create an rfp;

export default function Organization() {
    const {organization, currentRFPs, supplierRFPs, forms: { rfpMessageForm }, toggleFlag, rfpActive, currentUser, ...rest} = useContext(Context)
    useEffect( () => { if (rfpActive) toggleFlag("rfpActive", false) });
    return (
        <Col  colSize="col-12" colClass="col-xs-12 organization">
            <Row>
                <h1>{organization.name}</h1>
            </Row>
                {
                    Array.isArray(currentRFPs) && currentRFPs.length > 0 &&
                    <Row>
                        <Col colClass={"col-xs-12 col-md-12"}>
                        <h2 className={"mt-5"}>Current RFP's</h2>
                            <List 
                                items={
                                    currentRFPs.map((rfp) => {
                                        return (
                                            <BuyerRFPView 
                                                rfp={rfp.rfp}
                                                rfpId={rfp.id}
                                                orgId={organization.id}
                                                currentUserId={currentUser.uid}
                                                form={<Form form={rfpMessageForm} formName={rfpMessageForm.formName} {...rest} />}
                                            />
                                        )
                                    })
                                }
                            />
                        </Col>
                    </Row>
                }
            {
                Array.isArray(supplierRFPs) && supplierRFPs.length > 0 &&
                <Row>
                    <Col colClass={"col-xs-12 col-md-12"}>
                    <h2 className={"mt-5"}>Requested Proposals</h2>
                        <List 
                            items={
                                supplierRFPs && supplierRFPs.map((rfp) => {
                                    return (
                                        <SupplierRFPView 
                                            rfp={rfp}
                                            rfpId={rfp.id}
                                            orgId={organization.id}
                                            currentUserId={currentUser.uid}
                                            form={<Form form={rfpMessageForm} formName={rfpMessageForm.formName} {...rest} />}
                                        />
                                    )
                                })
                            }
                        />
                    </Col>
                </Row>
            }
        </Col>
    )
}