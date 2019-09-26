import React from "react";

export default function RequirementParagraphs({paragraphs, textClass}){
    return paragraphs.map((p, i) => <p key={i} className={textClass}>{p.text}</p>);
}