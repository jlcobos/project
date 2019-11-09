import React from "react";

export default function Button(props){
    const {variant ,handleSubmit, buttonClass, displayName, columns, wrapperClass, disabled, formName, submitType} = props;
    return (
            <div className={["form-group", columns, wrapperClass].join(" ")}>
                <button 
                    disabled={disabled} 
                    onClick={ e => handleSubmit(e, formName, submitType) }
                    className={[`btn btn-${variant} w-100`, buttonClass].join(" ")}
                >
                {displayName}
                </button>
            </div>
        )
}