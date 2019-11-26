import React from "react";

export default function Input(
    {
        type, 
        name, 
        displayName, 
        value, 
        inputClass, 
        wrapperClass,
        label, 
        columns, 
        handleOnBlur, 
        handleOnChange, 
        formName,
        pattern, 
        validation: { valid, validationMessage }
    })
    {
    return (
        <div className={["form-group", columns, wrapperClass].join(" ")}>
            {label && <label for={name}>{displayName}</label>}
            <input 
                type={type} 
                className={["form-control", inputClass || "",  valid === false ? "formInputBorderError" : "" ].join(" ")} 
                id={name} 
                name={name} 
                placeholder={displayName}
                value={value}
                pattern={pattern}
                onChange={(e) => handleOnChange(e,formName)}
                // onBlur={(e) => handleOnBlur(e,formName, validation)}
            />
            {valid === false &&  <small className="formErrorText">{validationMessage}</small>}
        </div>
    )
}