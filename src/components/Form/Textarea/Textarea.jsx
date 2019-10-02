import React from "react";

export default function TextArea({rows, placeholder, textareaClass, textareaId, label}){
    return (
        <div className={"form-group"}>
            {label && <label for={textareaId}>{label}</label>}
            <textarea className={`form-control ${textareaClass ? textareaClass : ""}`} rows={rows} id={textareaId} placeholder={placeholder}/>
        </div>
    )
}