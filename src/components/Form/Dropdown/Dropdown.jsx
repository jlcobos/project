import React from "react";
import styles from "./Dropdown.module.scss";

export default function Dropdown({displayText, values, action}){
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle  text-capitalize" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {displayText.replace("-", " ")}
            </button>
            <div className={`dropdown-menu ${styles.scrollableMenu}`} aria-labelledby="dropdownMenuButton">
                {values.map((value, i) => {
                    return <button key={i} onClick={(e) => action(e)} name={displayText} className="dropdown-item text-capitalize text-dark" value={value}>{ typeof value === "string" ? value.replace("-", " ") : value}</button>
                })}
            </div>
        </div>
    );
}