import React from "react";

export default function TextArea({rows, name, displayName, textareaClass, label, columns}){
    return (
        <div className={`form-group ${ columns || ""}`}>
            {label && <label for={name}>{displayName}</label>}
            <textarea className={`form-control ${textareaClass ? textareaClass : ""}`} name={name} rows={rows} id={name} placeholder={displayName}/>
        </div>
    )
}