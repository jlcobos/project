import React from "react";

export default function Input({type, displayName, inputClass, name, label, columns, formState, handleOnBlur, handleOnChange}){
    console.log(handleOnChange, handleOnBlur);
    return (
        <div className={`form-group ${ columns || ""}`}>
            {label && <label for={name}>{displayName}</label>}
            <input 
                type={type} 
                className={`form-control ${inputClass || ""}`} 
                id={name} 
                name={name} 
                placeholder={displayName}
                value={formState.name}
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
            />
        </div>
    )
}