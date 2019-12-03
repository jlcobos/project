import React, { useContext, useState } from "react";
import { Context } from "../../../context/context";
import Modal from "../../../components/Modal";

export default function SupplierRFPView({rfp, rfpId, form, orgId, currentUserId}) { // TODO: if rfp closed: remove all possible actions
    const { prefillFormField, organization } = useContext(Context);
    // const [orgName, setOrgName] = useState("");
    const [showMessages, setShowMessages] = useState(false);

    function setupMessage () {
        const data = [
            { name: "rfpId", value: rfpId },
            { name: "receivingOrganizationId", value: orgId },
            { name: "sendingOrganizationId", value: organization.id },
            { name: "senderUID", value: currentUserId },
        ];

        data.forEach(item => prefillFormField(item.name, item.value, "rfpMessageForm"));
    }
    const messageHistory = rfp.messages.filter((message) => message.sendingOrganizationId === organization.id || message.receivingOrganizationId === organization.id );
    return  <React.Fragment>
                <h4>Title: {rfp.rfpTitle || "No Title"}</h4>
                <p>Status: {rfp.status}</p>

                <button type="button" className="btn btn-link" onClick={() => setShowMessages(!showMessages) }>{showMessages ? "Close Messages" : "Show Messages"}</button>
                {messageHistory && showMessages && <Messages messages={messageHistory} />}

                <button 
                    type="button" 
                    className="btn btn-link" 
                    data-toggle="modal" 
                    data-target="#modal"
                    onClick={() => {
                        setupMessage();
                        // setOrgName(bidder.organizationName);
                        }
                    }
                >
                    New Message
                </button>


                <Modal 
                    headerText={`New Message`}
                    actionText={"Send"}
                >
                    {form}
                </Modal>
            </React.Fragment>
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