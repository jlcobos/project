import React from "react";
import {Button as Btn} from "react-bootstrap/Button";

type ButtonProps = {
    text: string,
    variant: Variant,
    style: string
}

enum Variant { 
    Primary = "primary", 
    Secondary = "secondary", 
    Success = "success", 
    Warning = "warning", 
    Danger = "danger", 
    Info = "info", 
    Light = "light", 
    Dark = "dark", 
    Link = "link" 
};

function Button({string: variant, string: text, string: style}) {

    return(
        <Btn variant={variant} style={style}>{text}</Btn>
    );
}

export default Button;