import React from "react";

export default function Button(props){
    const {variant ,handleSubmit, buttonClass, displayName, columns, wrapperClass, disabled, formName, formSubmit, form} = props;
    return (
            <div className={["form-group", columns, wrapperClass].join(" ")}>
                <button 
                    disabled={disabled} 
                    onClick={(e) => {
                        formSubmit ? handleSubmit(e, formName) : console.log("Unhandled non-form submit button");
                        e.preventDefault();
                    }}
                    className={[`btn btn-${variant} w-100`, buttonClass].join(" ")}
                >
                {displayName}
                </button>
            </div>
        )
}