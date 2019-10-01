import React from "react";

export default function Checkbox({inline, checkboxList, action, labelClass, checkboxClass}){
    return (
        checkboxList.map(({name, checked}) => {
            const displayName = name.replace(/-/g, " ");
            return (
                <div key={name} className={`form-check ${inline ? "form-check-inline" : ""}`}>
                    <input type="checkbox" checked={checked} name={name} onChange={(e) => action(e)} className={`form-check-input ${checkboxClass ? checkboxClass : ""}`} id={name} />
                    <label className={`form-check-label text-capitalize ${labelClass ? labelClass : ""}`} htmlFor={name}>{displayName}</label>
                </div>
                )
            })
    )
}