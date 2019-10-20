import React from "react";

export default function Dropdown({name, displayName, dropdownClass, formName, validation, handleOnChange, choices, value, columns}){
    return (
        <div className={`dropdown ${columns}`}>
            <button className="btn btn-primary dropdown-toggle  text-capitalize" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {`${displayName} - ${value}`}
            </button>
            <div className={`dropdown-menu`} aria-labelledby="dropdownMenuButton">
                {choices.map((choice, i) => {
                    return <button key={i} onClick={(e) => handleOnChange(e,formName)} name={choice.name} className="dropdown-item text-capitalize text-dark" value={choice.value}>{choice.displayName}</button>
                })}
            </div>
        </div>
    );
}