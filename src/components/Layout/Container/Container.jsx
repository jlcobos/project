import React from "react";

export default function Container({children, containerClass}) {
    return (
        <div className={`h-100 d-flex flex-column container-fluid flex-fill flex-grow-1 ${containerClass}`} >
            {children}
        </div>
    );
}