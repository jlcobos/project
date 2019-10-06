import React from "react";

export default function Button({variant, action, buttonClass, text, columns, wrapperClass}){
    return (
            <div className={["form-group", columns, wrapperClass].join(" ")}>
                <button onClick={(e) => action(e)} className={[`btn btn-${variant} w-100`, buttonClass].join(" ")}>{text}</button>
            </div>
        )
}