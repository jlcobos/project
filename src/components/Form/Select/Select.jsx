import React from "react";

export default function Select(
    {
        name, 
        displayName,
        label, 
        labelClass, 
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
    return (
        <div className={["form-group", columns, wrapperClass].join(" ")}>

            {label && <label className={labelClass} htmlFor={name}>{displayName}</label>}

            <select className="custom-select" name={name} onChange={(e) => handleOnChange(e, formName)} value={value} >
                {choices.map((choice, i) => {
                    return <option
                            key={i}
                            value={choice.displayName}
                            >
                                {`${choice.displayName}`}
                            </option>
                })}

            </select>
            {valid === false &&  <small className="formErrorText">{validationMessage}</small>}
        </div>
    )
}