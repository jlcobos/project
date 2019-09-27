import React from "react";

export default function Input({type, placeholder, inputClass, formGroup, inputId, label}){
    return (
        <div className={`${formGroup ? "form-group": ""}`}>
            {label && <label for={inputId}>{label}</label>}
            <input type={type} className={`form-control ${inputClass}`} id={inputId} placeholder={placeholder}/>
        </div>
    )
}