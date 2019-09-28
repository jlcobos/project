import React from "react";

export default function Dropdown({displayText, dropdownItems}){
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {displayText}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {dropdownItems.map(({value, action}, i) => {
                    return <p key={i} onClick={() => action(value)} className="dropdown-item text-capitalize text-dark" value={value}>{value.replace("-", " ")}</p>
                })}
            </div>
        </div>
    );
}