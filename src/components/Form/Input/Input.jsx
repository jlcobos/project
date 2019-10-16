import React from "react";

export default function Input({type, value, displayName, inputClass, name, label, columns, handleOnBlur, handleOnChange, formName, validation}){
    return (
        <div className={`form-group ${ columns || ""}`}>
            {label && <label for={name}>{displayName}</label>}
            <input 
                type={type} 
                className={`form-control ${inputClass || ""}`} 
                id={name} 
                name={name} 
                placeholder={displayName}
                value={value}
                onChange={(e) => handleOnChange(e,formName)}
                onBlur={(e) => handleOnBlur(e,formName, validation)}
            />
        </div>
    )
}