import React from "react";

export default function Dropdown({
    name, 
    displayName, 
    value, 
    inputClass,
    wrapperClass, 
    choices, 
    columns,
    handleOnChange, 
    formName, 
    required,
    validation: { valid, validationMessage }, 
})
{
    const buttonClass = (valid === false) ? 
        "btn btn-danger dropdown-toggle  text-capitalize" 
        : 
        "btn btn-primary dropdown-toggle  text-capitalize";
    return (
        <div id={name} className={wrapperClass}>
            <div className={["dropdown", columns, inputClass].join(" ")}>
                <button className={buttonClass} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {`${displayName}: ${value}`}
                </button>
                <div className={`dropdown-menu`} aria-labelledby="dropdownMenuButton">
                    {choices.map((choice, i) => {
                        return <button key={i} onClick={(e) => handleOnChange(e,formName)} name={choice.name} className="dropdown-item text-capitalize text-dark" value={choice.value}>{choice.displayName}</button>
                    })}
                </div>
            </div>
            {valid === false &&  <small className="formErrorText">{validationMessage}</small>}
        </div>
    );
}