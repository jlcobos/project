import React from "react";

export default function Button({variant, action, buttonClass, text}){
    return <button onClick={action} className={`btn btn-${variant} ${buttonClass ? buttonClass : ""}`}>{text}</button>
}