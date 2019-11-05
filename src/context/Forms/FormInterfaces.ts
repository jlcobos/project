export enum inputTypes {
    text = "text", 
    number = "number", 
    checkbox = "checkbox", 
    dropdown = "dropdown", 
    date = "date", 
    password = "password", 
    textarea = "textarea", 
    email = "email", 
    button = "button", 
    submit = "submit", 
    tel = "tel", 
    url = "url", 
};

export enum validationTypes {
    string = "string",
    stringNumber = "string number",
    number = "number",
    date = "date",
    email = "email",
}
export interface IChoices {
    name: string;
    displayName: string;
    value: boolean | string;
}


interface validation {
    valid: boolean | null;
    required: boolean;
    validationMessage: string;
    lengthRequired: boolean;
    validationType: string;
    length?: {min: number; max: number};
}

export interface IInputProps {
    name: string;
    label: string | boolean;
    displayName: string,
    value: string | number | boolean | null;
    type: inputTypes;
    pattern?: string;
    columns: "col-1" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12" | "";
    rows?: number;
    inputClass: string | false;
    validation: validation;
}
export interface ICheckboxProps {
    name: string;
    header: string;
    withHeader: boolean;
    type: inputTypes.checkbox;
    list: boolean;
    inline: boolean;
    checkboxClass: string;
    labelClass: string;
    columns: "col-1" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12" | "";
    choices: IChoices[];
}

export interface IDropdownProps {
    name: string;
    displayName: string;
    type: inputTypes.dropdown;
    dropdownClass: string;
    columns: "col-1" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12" | "";
    value: string | number;
    validation: validation;
    choices: IChoices[];
}
export interface IButtonProps {
    name: string
    displayName: string;
    disabled: boolean;
    action?: string;
    type: inputTypes.button;
    submitType: "login" | "signup" | "organizationSignup" | "api";
    variant: "primary" | "secondary" | "success" | "danger" | "dark" | "info" | "warning";
    wrapperClass: string,
    buttonClass: string;
    columns: "col-1" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12" | "";
}