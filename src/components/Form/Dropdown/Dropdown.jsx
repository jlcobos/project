import React, { useState } from "react";

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
    multiSelect,
    validation: { valid, validationMessage }, 
}) {

    // const [selectValues, setValues] = useState([]);

    const buttonClass = (valid === false) ? "btn btn-danger dropdown-toggle  text-capitalize" : "btn btn-primary dropdown-toggle  text-capitalize";
    return (
        <div id={name} className={[wrapperClass, columns].join(" ")}>

            <div className={["dropdown w-100", inputClass].join(" ")}>
                <button 
                    className={[`${buttonClass}`, "w-100"].join(" ")} 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle={multiSelect ? "" : "dropdown"}
                    aria-haspopup="true" 
                    aria-expanded="false"
                    onClick={(e) => {
                        if (multiSelect) toggleDropdown(`${name}-dropdown`);
                    }}
                >
                    {multiSelect ?  `Add ${displayName}` : `${value ? "" : "Select " + displayName } ${value}`}
                </button>
                <div id={`${name}-dropdown`} className={`dropdown-menu w-100`} aria-labelledby="dropdownMenuButton">
                    {choices.map((choice, i) => {
                        return <button 
                            key={i} 
                            className="dropdown-item text-capitalize text-dark" 
                            value={choice.value}
                            name={choice.name} 
                            onClick={(e) => {
                                e.preventDefault();
                                if (multiSelect) {
                                    if (value.includes(choice.displayName)) {
                                        const withRemovedValue = value.filter( v => v !== choice.value);
                                        handleOnChange(e,formName, "multiSelect", withRemovedValue);
                                    } else {
                                        let updatedValues = [...value];
                                        updatedValues.push(choice.value);
                                        handleOnChange(e,formName, "multiSelect", updatedValues);
                                    }
                                } else {
                                    handleOnChange(e,formName);
                                }
                            }} 
                        >
                            {choice.displayName}
                        </button>
                    })}
                </div>
            </div>
            {valid === false &&  <small className="formErrorText">{validationMessage}</small>}
        </div>
    );
}

function toggleDropdown(id){
    const element = document.getElementById(id);
    element.classList.toggle("show");
}