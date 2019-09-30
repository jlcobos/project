import React from "react";

export default function Checkbox({inline, checkboxList, action, labelClass, checkboxClass}){
    return (
        Object.keys(checkboxList).map(key => {
            return (
                <div key={key} className={`form-check ${inline ? "form-check-inline" : ""}`}>
                    <input type="checkbox" checked={checkboxList[key]} name={key} onChange={(e) => action(e)} className={`form-check-input ${checkboxClass ? checkboxClass : ""}`} id={key} />
                    <label className={`form-check-label text-capitalize ${labelClass ? labelClass : ""}`} htmlFor={key}>{key.split("-").join(" ")}</label>
                </div>
                )
            })
    )
}