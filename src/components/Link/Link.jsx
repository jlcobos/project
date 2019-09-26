import React from "react";
import Linkify from "linkifyjs/react";

export default function Link({displayName, link}){
    return <a href={link}>{displayName}</a>
}
