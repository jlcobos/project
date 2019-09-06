import React from "react";

export default function Button({buttonClass, variant, text, withIcon, icon}){
    return (
        <button className={`btn btn-${variant} ${buttonClass}`}>
            {withIcon ? icon : text}
        </button>
    ) 
}