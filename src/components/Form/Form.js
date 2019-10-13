import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Button from "./Button";
// import DropDown from "./Dropdown";

export default function Form({form, formState, handleOnChange, handleOnBlur, handleSubmit}){
    return (
        <form className="d-flex flex-wrap">        
            {form.map(function(input) {
                console.log(handleOnChange);
                if (input.type === "text") return <Input key={input.name} formState={formState} handleOnChange={handleOnChange} handleOnBlur={handleOnBlur} {...input} />
                else if (input.type === "textarea") return <Textarea key={input.name} formState={formState} handleOnChange={handleOnChange} handleOnBlur={handleOnBlur} {...input} />
                else if (input.type === "checkbox") return <Checkbox key={input.name} formState={formState} handleOnChange={handleOnChange} {...input} />
                else if (input.type === "button") return <Button key={input.name} handleSubmit={handleSubmit} {...input} />
                // else if (formProps.type === "dropdown") return <Input />
            })}
        </form>
    )
}