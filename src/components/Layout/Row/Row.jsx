import React from "react";

export default function Row({children, rowClass}) {
    return (
        <div className={`row ${rowClass}`}>
            {children}
        </div>
    )
}