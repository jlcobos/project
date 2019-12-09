import React from "react";

export default function Checkbox({
    name, 
    value, 
    inline, 
    handleOnChange, 
    labelClass, 
    checkboxClass, 
    columns, 
    formName, 
    displayName,
    secondaryAction,
    wrapperClass,
}){
    return (
        <div className={`${columns} ${wrapperClass} mb-2 form-check ${inline ? "form-check-inline" : ""}`}>
            <input 
                className={`form-check-input ${checkboxClass ? checkboxClass : ""}`} 
                id={name} 
                name={name} 
                type="checkbox" 
                checked={value} 
                onChange={(e) => handleOnChange(e,formName, secondaryAction)} 
            />
            <label className={`form-check-label text-capitalize ${labelClass ? labelClass : ""}`} htmlFor={name}>{displayName}</label>
        </div>
    )
}