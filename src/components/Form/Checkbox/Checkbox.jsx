import React from "react";

export default function Checkbox({inline, choices, handleOnChange, labelClass, checkboxClass, header, listHeaderClass, columns, withHeader, formState, formName}){
    return (
        <div className={`mb-2 ${columns}`}>
            {withHeader && <h4 className={`pl-0 ${listHeaderClass && ""}`}>{header}</h4>}
            
            {choices.map(({name, displayName, value},i) => {
                return (
                    <div key={name} className={`form-check ${inline ? "form-check-inline" : ""}`}>
                        <input 
                            type="checkbox" 
                            checked={value} 
                            name={name} 
                            onChange={(e) => handleOnChange(e,formName)} 
                            className={`form-check-input ${checkboxClass ? checkboxClass : ""}`} 
                            id={name} 
                        />
                        <label className={`form-check-label text-capitalize ${labelClass ? labelClass : ""}`} htmlFor={name}>{displayName}</label>
                    </div>
                    )
                })}
        </div>
    )
}