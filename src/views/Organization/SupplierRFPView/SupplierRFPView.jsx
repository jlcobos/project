import React, { useContext, useState } from "react";
import { Context } from "../../../context/context";
import Messages from "../Messages";
import Modal from "../../../components/Modal";
import moment from "moment";

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
    return  <div className="mb-1 row" key={"supplier-"+orgId}>
                <div className="text-center col-12 mb-3">
                    <h4>RFP Title: {rfp.rfpTitle || "No Title"}</h4>
                    <p>Status: {rfp.status}</p>
                </div>

                <div className="col-sm-12 d-flex justify-content-around">
                    <button type="button" className="btn btn-primary py-0" onClick={() => setShowMessages(!showMessages) }>{showMessages ? "Close Messages" : "Show Messages"}</button>
                    <button 
                        type="button" 
                        className="btn btn-info  py-0" 
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
                </div>

                <div className="my-3 px-2 w-100">
                    {messageHistory && showMessages && <Messages messages={messageHistory} messageId={orgId+currentUserId} />}
                </div>

                <Modal 
                    headerText={`New Message`}
                    actionText={"Send"}
                >
                    {form}
                </Modal>
            </div>
}