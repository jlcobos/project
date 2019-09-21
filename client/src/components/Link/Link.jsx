import React from "react";
import Linkify from "linkifyjs/react";

export default function Link({text, options}){
    return (
        <Linkify options={options} tagName="p">
            {text}
        </Linkify>
    )
}