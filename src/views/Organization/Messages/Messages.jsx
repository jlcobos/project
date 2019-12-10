import React from "react";
import moment from 'moment';

export default function Messages({messages, messageId}){ // TODO: use guids for the id
    const reversedMessages = messages.reverse(); // TODO: add timezone
    // TODO: prepend messages so you dont have to reverse ??
    return (
        <div className="accordion" id={messageId}>
            {reversedMessages.map((message, i) => {
                return (
                    <div key={i} className="card bg-light">
                        <div className="card-header py-1" id={`heading-${messageId}${i}`}>
                            <h2 className="mb-0">
                            <button className="btn btn-link p-0" type="button" data-toggle="collapse" data-target={`#collapse-${messageId}${i}`} aria-expanded="true" aria-controls={`collapse-${messageId}${i}`}>
                                {reversedMessages.length -i}: Subject: {message.subject} <small className="text-black-50 pl-3" ><em>{moment(message.dateSent.toDate()).format("MMMM Do YYYY, h:mm a")}</em></small>
                            </button>
                            </h2>
                            
                        </div>
                
                        <div id={`collapse-${messageId}${i}`} className="collapse" aria-labelledby={`heading-${messageId}${i}`} data-parent={`#${messageId}`}>
                            <div className="card-body px-3 py-2">
                                <p className="card-body text-body p-0">{message.message}</p>
                            </div>
                        </div>
                    </div>
                ) 
            })}
        </div>
    )
}