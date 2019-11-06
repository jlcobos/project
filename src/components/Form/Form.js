import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Dropdown from "./Dropdown";
// import DropDown from "./Dropdown";

// export default function Form({form, handleOnChange, handleOnBlur, handleSubmit, formName}){
export default function Form({form, ...props}){
    const inputTypes = [
        "text", 
        "number", 
        "date", 
        "password", 
        "email", 
        "radio", 
        "select", 
        "search", 
        "range", 
        "tel", 
        "url", 
        "week", 
        "time", 
        "color", 
        "date-time-local", 
        "month", 
        "hidden"
    ];
    function inputTypeError(){
        console.log("Input type not recognized");
    }
    return (
        <form className="d-flex flex-wrap">
            {form.map(function(input) {
                if      (inputTypes.includes(input.type)) return <Input    key={input.name} {...input} {...props} />
                else if (input.type === "textarea")       return <Textarea key={input.name} {...input} {...props} />
                else if (input.type === "checkbox")       return <Checkbox key={input.name} {...input} {...props} />
                else if (input.type === "dropdown")       return <Dropdown key={input.name} {...input} {...props} />
                else if (input.type === "button")         return <Button   key={input.name} {...input} {...props} />
                else inputTypeError();
            })}
        </form>
    )
}