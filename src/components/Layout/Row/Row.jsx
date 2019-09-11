import React from "react";

export default function Row({children, rowClass}) {
    return (
        <div className={`row ${rowClass !== undefined ? rowClass : ""}`} data-pgc-field="main-page-content">
            {children}
        </div>
    )
}