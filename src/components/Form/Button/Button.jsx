import React from "react";

export default function Button({variant ,action, buttonClass, displayName, columns, wrapperClass, disabled}){
    return (
            <div className={["form-group", columns, wrapperClass].join(" ")}>
                <button 
                    disabled={disabled} 
                    onClick={(e) => action(e)} 
                    className={[`btn btn-${variant} w-100`, buttonClass].join(" ")}
                >
                {displayName}
                </button>
            </div>
        )
}