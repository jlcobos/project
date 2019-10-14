import React from "react";

export default function TextArea({rows, name, displayName, textareaClass, label, columns, formState, handleOnBlur, handleOnChange, formDataName}){
    return (
        <div className={`form-group ${ columns || ""}`}>
            {label && <label for={name}>{displayName}</label>}
            <textarea 
                className={`form-control ${textareaClass ? textareaClass : ""}`} 
                name={name} 
                value={formState.name} 
                rows={rows} id={name} 
                placeholder={displayName}
                onChange={(e) => handleOnChange(e, formDataName)}
                onBlur={(e) => handleOnBlur(e, formDataName)}
            />
        </div>
    )
}