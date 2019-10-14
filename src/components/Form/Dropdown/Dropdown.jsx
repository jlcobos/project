import React from "react";
import styles from "./Dropdown.module.scss";

export default function Dropdown({name, values, action, formDataName}){
    const displayName = name.replace("-", " ");
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle  text-capitalize" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {displayName}
            </button>
            <div className={`dropdown-menu ${styles.scrollableMenu}`} aria-labelledby="dropdownMenuButton">
                {values.map((value, i) => {
                    return <button key={i} onClick={(e) => action(e,formDataName)} name={name} className="dropdown-item text-capitalize text-dark" value={value}>{value.replace("-", " ")}</button>
                })}
            </div>
        </div>
    );
}