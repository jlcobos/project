import React from "react";
import StringMethods from "../../Utilities/stringMethods";

export default function Checkbox({inline, checkboxList, action, labelClass, checkboxClass, listHeader}){
    return (
        <React.Fragment>
            <h4>{listHeader}</h4>
            {checkboxList.map(({name, checked}) => {
                const displayName = StringMethods.toDisplayName(name, "-");
                return (
                    <div key={name} className={`form-check ${inline ? "form-check-inline" : ""}`}>
                        <input type="checkbox" checked={checked} name={name} onChange={(e) => action(e)} className={`form-check-input ${checkboxClass ? checkboxClass : ""}`} id={name} />
                        <label className={`form-check-label text-capitalize ${labelClass ? labelClass : ""}`} htmlFor={name}>{displayName}</label>
                    </div>
                    )
                })}
        </React.Fragment>
    )
}