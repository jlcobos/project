import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../context/context";
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

    return  <React.Fragment>
                <h4>Title: {rfp.rfpTitle || "No Title"}</h4>
                <p>Status: {rfp.status}</p>
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
            </React.Fragment>
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
        <div key={bidderId}>
            <p>{bidder.name}</p>
            <button type="button" className="btn btn-link" onClick={() => setShowMessages(!showMessages) }>{showMessages ? "Close Messages" : "Show Messages"}</button>
            {showMessages && <Messages messages={messages} />}
            <button 
                type="button" 
                className="btn btn-link" 
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