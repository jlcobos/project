import React from "react";

export default function Container({children, classes}) {
    return (
        <div class={["container-fluid",...classes].join(" ")} >
            {children}
        </div>
    );
}