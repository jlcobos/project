import React from "react";

export default function Input({type, placeholder, inputClass, inputId, label}){
    return (
        <div className={"form-group"}>
            {label && <label for={inputId}>{label}</label>}
            <input type={type} className={`form-control ${inputClass ? inputClass : ""}`} id={inputId} placeholder={placeholder}/>
        </div>
    )
}