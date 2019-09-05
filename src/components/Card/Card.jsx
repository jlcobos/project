import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({
    cardClass, 
    bodyClass, 
    withTitle, titleElement, titleClass, titleText, 
    withCardText, cardTextElement , cardTextClass , cardText, 
    withNavLink, navLinkRoute, navLinkText
})
{
    return (
        <div className={["card", cardClass].join(" ")} >
            <div className={["card-body", bodyClass].join(" ")}>
                {withTitle && element({tag: titleElement || "h5", classes: `card-title ${titleClass}`, text: titleText})}
                {withCardText && element({tag: cardTextElement || "p", classes: `card-text ${cardTextClass}`, text: cardText})}
                {withNavLink && <NavLink to={navLinkRoute}>{navLinkText}</NavLink>}
            </div>
        </div>
    );
}

function element({tag, classes, text}){
    return React.createElement(tag, { class: [...classes].join(" "), }, text);
}

