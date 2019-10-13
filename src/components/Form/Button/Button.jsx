import React from "react";

export default function Button({variant ,handleSubmit, buttonClass, displayName, columns, wrapperClass, disabled}){
    return (
            <div className={["form-group", columns, wrapperClass].join(" ")}>
                <button 
                    disabled={disabled} 
                    onClick={(e) => handleSubmit(e)} 
                    className={[`btn btn-${variant} w-100`, buttonClass].join(" ")}
                >
                {displayName}
                </button>
            </div>
        )
}