import React from "react";

export default function Col({children, colClass, colSize}) {
    return (
        <div className={`${colSize ? colSize : "col"} ${colClass}`}>
            {children}
        </div>
    )
}