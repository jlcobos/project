import React from "react";

export default function TextArea({
    rows, 
    name, 
    value, 
    displayName, 
    textareaClass,
    wrapperClass, 
    label,
    labelClass,
    columns, 
    handleOnBlur, 
    handleOnChange, 
    formName, 
    validation: { valid, validationMessage }
    })
    {
    return (
        <div className={`form-group ${ columns || ""} ${wrapperClass}`}>
            {label && <label className={labelClass} htmlFor={name}>{displayName}</label>}
            <textarea 
                className={["form-control", textareaClass || "",  valid === false ? "formInputBorderError" : "" ].join(" ")} 
                name={name} 
                value={value} 
                rows={rows} id={name} 
                placeholder={displayName}
                onChange={(e) => handleOnChange(e, formName)}
                onBlur={(e) => handleOnBlur(e, formName)}
            />
            {valid === false &&  <small className="formErrorText">{validationMessage}</small>}
        </div>
    )
}