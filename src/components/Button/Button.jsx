import React from "react";

export default function Button({buttonClass, variant, children, withIcon, icon}){
    return (
        <button className={`btn btn-${variant} ${buttonClass}`}>
            {withIcon ? icon : children}
        </button>
    ) 
}