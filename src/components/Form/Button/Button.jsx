import React from "react";

export default function Button({variant, withAction ,action, buttonClass, text, columns, wrapperClass, disabled}){
    return (
            <div className={["form-group", columns, wrapperClass].join(" ")}>
                <button 
                    disabled={disabled} 
                    onClick={withAction ? (e) => action(e) : (e) => e.prevent.Default() } 
                    className={[`btn btn-${variant} w-100`, buttonClass].join(" ")}
                >
                {text}
                </button>
            </div>
        )
}