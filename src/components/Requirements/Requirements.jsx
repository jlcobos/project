import React from "react";

export default function RequirementParagraphs({paragraphs, textClass}){
    return paragraphs.map((paragraph, i) => <p className={textClass} key={i}>{paragraph.text}</p>);
}