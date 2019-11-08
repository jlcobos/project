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

export enum Variant {
    primary = "primary", 
    secondary = "secondary", 
    success = "success", 
    danger = "danger", 
    dark =  "dark", 
    info = "info", 
    warning = "warning"
}

export enum Columns {
    col1  = "col-1", 
    col2  = "col-2", 
    col3  = "col-3", 
    col4  = "col-4", 
    col5  = "col-5", 
    col6  = "col-6", 
    col7  = "col-7", 
    col8  = "col-8", 
    col9  = "col-9", 
    col10 = "col-10", 
    col11 = "col-11", 
    col12 = "col-12", 
    none  = ""
}

export enum validationTypes {
    string = "string",
    stringNumber = "string number",
    number = "number",
    date = "date",
    email = "email",
}

export interface IForm {
    formName: string;
    inputs: IInput[]
}

interface validation {
    valid: boolean | null;
    required: boolean;
    validationMessage: string;
    lengthRequired: boolean;
    validationType: string;
    length?: {min: number; max: number};
}

export interface IInput {
    name: string;
    displayName: string,
    type: inputTypes;
    label: string | boolean;
    value: string | number | boolean | null;
    inputClass: string | false;
    labelClass?: string;
    variant?: string;
    submitType?: "login" | "signup" | "organizationSignup" | "bid" | "api";
    disabled?: boolean;
    action?: string;
    wrapperClass?: string;
    pattern?: string;
    inline?: boolean;
    columns: Columns;
    rows?: number;
    validation?: validation | false;
    choices?: {name: string, displayName: string, value: string}[];
    buttonClass?: string;
}