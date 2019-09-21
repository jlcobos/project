import React from "react";

export default function({list, formClass, checkboxClass, labelClass}){
    return (
        <form className={`d-flex justify-content-around p-3 ${formClass}`}>
            {list.map(item, i)}
            <div key={i} className="form-check form-check-inline">
                <input className={`form-check-input ${checkboxClass}`} type="checkbox" id={`${item.id}`} value={`${item.value}`} />
                <label className={`form-check-label ${labelClass}`} for={`${item.id}`}>{item.displayName}</label>
            </div>
        </form>
    );
}