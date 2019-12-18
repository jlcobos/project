import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({
    cardClass, 
    bodyClass,
    withHeader, header, headerClass, headerType,
    withTitle, titleElement, titleClass, title, 
    withBodyText, bodyTextElement , bodyTextClass , bodyText, 
    withNavLink, navLinkRoute, navLinkText, navLinkClass,
    withFooter, footerClass, footerText,
    withNavFooter, navFooterClass, navFooterText, navPath,
    textCenter,
    children,
})
{
    return (
        <div className={`card ${cardClass}${textCenter ? " text-center" : ""}`} >
            {withHeader && element({type: headerType || "div", props: {className: `card-header ${headerClass || ""}`}, children: header})}
            <div className={["card-body", bodyClass].join(" ")}>
                {withTitle && element({type: titleElement || "h5", props: {className: `card-title ${titleClass || ""}`}, children: title})}
                {children}
                {withBodyText && element({type: bodyTextElement || "p", classes: `card-text ${bodyTextClass || ""}`, children: bodyText})}
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
