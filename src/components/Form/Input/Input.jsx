import React from "react";

export default function Input({type, displayName, inputClass, name, label, action, value, columns, blurAction}){
    return (
        <div className={`form-group my2 ${ columns || ""}`}>
            {label && <label for={name}>{displayName}</label>}
            <input 
                type={type} 
                className={`form-control ${inputClass ? inputClass : ""}`} 
                id={name} 
                name={name} 
                placeholder={displayName}
                value={value}
                onChange={(e) => action(e)}
                onBlur={(e) => blurAction(e)}
            />
        </div>
    )
}