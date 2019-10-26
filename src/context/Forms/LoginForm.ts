import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const loginForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "email",
        label: false,
        displayName: "Email",
        value: "",
        type: inputTypes.email,
        columns: "col-12",
        inputClass: "",
        validation: {
            validationType: "email",
            valid: null,
            lengthRequired: false,
            required: true,
            validationMessage: "",
        }
    },
    {
        name: "password",
        label: false,
        displayName: "Password",
        value: "",
        type: inputTypes.password,
        columns: "col-12",
        inputClass: "",
        validation: {
            validationType: "string",
            valid: null,
            required: true,
            lengthRequired: true,
            length: {min: 8, max: 16},
            validationMessage: "",
        }
    },
    {
        name: "login",
        displayName: "Submit",
        disabled: false,
        action: "handleSubmit",
        type: inputTypes.button,
        submitType: "login",
        variant: "primary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-12",
    },
]