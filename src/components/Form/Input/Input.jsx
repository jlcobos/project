import React from "react";

export default function Input(
    {
        type, 
        value, 
        displayName, 
        inputClass, 
        name, 
        label, 
        columns, 
        handleOnBlur, 
        handleOnChange, 
        formName, 
        validation: { valid, validationMessage }
    })
    {
    return (
        <div className={["form-group", columns].join(" ")}>
            {label && <label for={name}>{displayName}</label>}
            <input 
                type={type} 
                className={["form-control", inputClass || "",  valid === false ? "formError placeholderErrorTextColor" : "" ].join(" ")} 
                id={name} 
                name={name} 
                placeholder={valid === false ? validationMessage : displayName}
                value={value}
                onChange={(e) => handleOnChange(e,formName)}
                // onBlur={(e) => handleOnBlur(e,formName, validation)}
            />
        </div>
    )
}