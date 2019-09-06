import React from "react";

export default function Container({children, containerClass}) {
    return (
        <div className={`container-fluid ${containerClass}`} >
            {children}
        </div>
    );
}