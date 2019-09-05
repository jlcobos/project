import React from "react";

export default function Button({
    classes, 
    variant, 
    text, 
    withIcon, icon,
    m1, m2, m3, m4, m5,
    mx1, mx2, mx3, mx4, mx5
    })
    {
    return <button class={[
        "btn", 
        `btn-${variant}`,
        classes,
        m1 && "m-1",
        m2 && "m-2",
        m3 && "m-3",
        m4 && "m-4",
        m5 && "m-5",
        mx1 && "mx-1",
        mx2 && "mx-2",
        mx3 && "mx-3",
        mx4 && "mx-4",
        mx5 && "mx-5",
    ].join(" ")}
        >
            {withIcon ? icon : text}
        </button>
}