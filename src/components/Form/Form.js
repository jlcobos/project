import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Button from "./Button";
// import DropDown from "./Dropdown";

export default function Form({form, formState, handleOnChange, handleOnBlur, handleSubmit, formDataName}){
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
    return (
        <form className="d-flex flex-wrap">        
            {form.map(function(input) {
                if (inputTypes.includes(input.type)) return <Input key={input.name} formState={formState} handleOnChange={handleOnChange} handleOnBlur={handleOnBlur} formDataName={formDataName} {...input} />
                else if (input.type === "textarea") return <Textarea key={input.name} formState={formState} handleOnChange={handleOnChange} handleOnBlur={handleOnBlur} formDataName={formDataName} {...input} />
                else if (input.type === "checkbox") return <Checkbox key={input.name} formState={formState} handleOnChange={handleOnChange} {...input} formDataName={formDataName} />
                else if (input.type === "button") return <Button key={input.name} handleSubmit={handleSubmit} formDataName={formDataName} form={form} {...input} />
                // else if (formProps.type === "dropdown") return <Input />
            })}
        </form>
    )
}