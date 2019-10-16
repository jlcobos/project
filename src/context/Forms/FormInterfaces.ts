export enum inputTypes {
    text = "text", 
    number = "number", 
    checkbox = "checkbox", 
    date = "date", 
    password = "password", 
    textarea = "textarea", 
    email = "email", 
    radio = "radio", 
    button = "button", 
    submit = "submit", 
    select = "select", 
    file = "file", 
    search = "search", 
    range = "range", 
    tel = "tel", 
    url = "url", 
    week = "week", 
    reset = "reset", 
    time = "time", 
    color = "color", 
    dateTimeLocal = "date-time-local", 
    month = "month", 
    image = "image", 
    hidden = "hidden"
};
export interface CheckboxChoices {
    name: string;
    displayName: string;
    value: boolean;
}

interface validation {
    lengthRequired: boolean;
    length?: {min: number; max: number};
    type?: string;
    required: boolean;
    // validated: {state: true, errors: {}} // rework this
}

export interface IInputProps {
    name: string;
    label: string | boolean;
    displayName: string,
    value: string | number | boolean | null;
    type: inputTypes;
    columns: "col-1" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12";
    rows?: number;
    inputClass: string | false;
    validation: validation;
}
export interface ICheckboxProps {
    name: string;
    header: string;
    withHeader: boolean;
    type: "checkbox";
    list: boolean;
    inline: boolean;
    checkboxClass: string;
    labelClass: string;
    columns: string;
    choices: CheckboxChoices[];
}
export interface IButtonProps {
    name: string
    displayName: string;
    withAction?: boolean;
    disabled: boolean;
    action?: string;
    type: "button";
    formSubmit: boolean;
    variant: "primary" | "secondary" | "success" | "danger" | "dark" | "info" | "warning";
    wrapperClass: string,
    buttonClass: string;
    columns: "col-1" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12";
}
