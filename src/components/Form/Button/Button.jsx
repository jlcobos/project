import React from "react";

export default function Button({variant, action, buttonClass, text}){
    return (
            <button onClick={(e) => action(e)} className={`btn btn-${variant} my-2 ${buttonClass ? buttonClass : ""}`}>{text}</button>
        )
}