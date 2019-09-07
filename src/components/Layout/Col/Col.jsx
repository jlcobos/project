import React from "react";

export default function Col({children, colClass}) {
    return (
        <div className={`col ${colClass}`}>
            {children}
        </div>
    )
}