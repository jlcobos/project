import React from "react";

export default function TextArea({
    rows, 
    name, 
    value, 
    displayName, 
    textareaClass, 
    label, 
    columns, 
    handleOnBlur, 
    handleOnChange, 
    formName, 
    validation
    })
    {
    return (
        <div className={`form-group ${ columns || ""}`}>
            {label && <label for={name}>{displayName}</label>}
            <textarea 
                className={`form-control ${textareaClass ? textareaClass : ""}`} 
                name={name} 
                value={value} 
                rows={rows} id={name} 
                placeholder={displayName}
                onChange={(e) => handleOnChange(e, formName)}
                onBlur={(e) => handleOnBlur(e, formName)}
            />
        </div>
    )
}