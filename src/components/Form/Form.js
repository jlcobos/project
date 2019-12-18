import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Select from "./Select";
// import DropDown from "./Dropdown";

// export default function Form({form, handleOnChange, handleOnBlur, handleSubmit, formName}){
export default function Form({form, title, titleWrapperClass, withFooter, footerWrapperClass, footerNode, titleClass,...props}){
    const inputTypes = [
        "text",
        "number",
        "date",
        "password",
        "email",
        "radio",
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
        console.error("Input type not recognized");
    }
    return (
        <form className="d-flex flex-wrap">
            {title && <div className={["formTitle w-100 d-block", titleWrapperClass]}>
                <h3 className={titleClass+"w-100 text-center"}>{title}</h3>
                <hr/>
            </div>}
            {form.inputs.map(function(input) {
                if      (inputTypes.includes(input.type)) return <Input    key={input.name} {...input} {...props} />
                else if (input.type === "textarea")       return <Textarea key={input.name} {...input} {...props} />
                else if (input.type === "checkbox")       return <Checkbox key={input.name} {...input} {...props} />
                else if (input.type === "dropdown")       return <Dropdown key={input.name} {...input} {...props} />
                else if (input.type === "select")         return <Select key={input.name} {...input} {...props} />
                else if (input.type === "button")         return <Button   key={input.name} {...input} {...props} />
                else inputTypeError();
            })}
            {withFooter ?
                (
                    <footer className={[footerWrapperClass, ""].join(" ")}>
                        {footerNode}
                    </footer>
                )
                :
                null
            }
        </form>
    )
}