import React from "react";

export default function Row({children, classes}) {
    return (
        <div className={["row", ...classes].join(" ")}>
            {children}
        </div>
    )
}