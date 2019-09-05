import React from "react";

export default function Col({children, classes}) {
    return (
        <div className={["col", ...classes].join(" ")}>
            {children}
        </div>
    )
}