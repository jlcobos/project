import React from "react";

export default function Checkbox({inline, checkboxList}){
    return (
        checkboxList.map(({checkboxId, checkboxClass, value, labelClass}) => {
            return (
                <div key={value} className={`form-check ${inline ? "form-check-inline" : ""}`}>
                    <input type="checkbox" value={value} className={`form-check-input ${checkboxClass ? checkboxClass : ""}`} id={checkboxId} />
                    <label className={`form-check-label text-capitalize ${labelClass ? labelClass : ""}`} htmlFor={checkboxId}>{value.split("-").join(" ")}</label>
                </div>
                )
            })
    )
}