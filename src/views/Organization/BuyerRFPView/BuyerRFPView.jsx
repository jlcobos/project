import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context/context";
import Messages from "../Messages";
import Modal from "../../../components/Modal";

export default function BuyerRFPView({rfp, rfpId, form, orgId, currentUserId}) { // TODO: if rfp closed: remove all possible actions
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

    return  <div className="rfpBody">
                <div className="text-center">
                    <h4>RFP Title: {rfp.rfpTitle || "No Title"}</h4>
                    <p>Status: {rfp.status}</p>
                </div>
                {rfp.bidders.map((id) => {
                    return <Bidder
                            key={id} 
                            bidderId={id} 
                            messages={rfp.messages.filter((message) => message.receivingOrganizationId === id)} 
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
            </div>
}

function Bidder({bidderId, messages, setupMessage, setOrgName}) {
    const { getBidder } = useContext(Context);
    const [showMessages, setShowMessages] = useState(false);
    const [bidder, setBidderName] = useState(false);
    useEffect(() => {
        ( async function() { 
        const res = await getBidder(bidderId);
        setBidderName(res);
        })();
    },[]);

    return (
        <div className="mb-5 row" key={bidderId}>
            <div className="col-sm-12 col-md-3">
                <p className="mb-0 d-inline">Supplier: {bidder.name}</p>
            </div>
            <div className="text-left col-sm-7 col-md-4 mb-1">
                <button type="button" className="btn btn-primary w-75 py-0" onClick={() => setShowMessages(!showMessages) }>{showMessages ? "Close Messages" : "Show Messages"}</button>
            </div>

            <div className="text-left col-sm-7 col-md-4 mb-1">
                <button 
                    type="button" 
                    className="btn btn-info w-75  py-0" 
                    data-toggle="modal" 
                    data-target="#modal"
                    onClick={() => {
                        setupMessage(bidderId);
                        setOrgName(bidder.name);
                    }
                }
                >
                        New Message
                </button>
            </div>
            <div className="my-3 w-100">
                {showMessages && <Messages messages={messages} messageId={bidderId} />}
            </div>
        </div>
    )
}