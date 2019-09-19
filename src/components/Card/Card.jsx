import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({
    cardClass, 
    bodyClass,
    withHeader, header, headerClass, 
    withTitle, titleElement, titleClass, title, 
    withCardText, cardTextElement , cardTextClass , cardText, 
    withNavLink, navLinkRoute, navLinkText, navLinkClass,
    withFooter, footerClass, footerText,
    withNavFooter, navFooterClass, navFooterText, navPath
})
{
    return (
        <div className={`card ${cardClass}`} >
            {withHeader && element({type: "div", className: `card-header ${headerClass || ""}`, text: header})}
            <div className={["card-body", bodyClass].join(" ")}>
                {withTitle && element({type: titleElement || "h5", className: `card-title ${titleClass || ""}`, children: title})}
                {withCardText && element({type: cardTextElement || "p", classes: `card-text ${cardTextClass || ""}`, children: cardText})}
                {withNavLink && <NavLink className={navLinkClass || ""} to={navLinkRoute}>{navLinkText}</NavLink>}
            </div>
            {withFooter && element({type: "div", props: {className: `card-footer ${footerClass || ""}`}, children: footerText})}
            {withNavFooter && element({type: NavLink, props: {className: `card-footer ${navFooterClass || ""}`, to: navPath}, children: navFooterText})}
        </div>
    );
}

function element({type,  props, children}){
    return React.createElement(type, props , children);
}
