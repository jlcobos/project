import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const signupForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "email",
        label: false,
        displayName: "Email",
        value: "",
        type: inputTypes.email,
        columns: "col-12",
        inputClass: "",
        validation: {
            validationType: inputTypes.email,
            valid: null,
            required: true,
            lengthRequired: false,
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
        name: "confirmPassword",
        label: false,
        displayName: "Confirm Password",
        value: "",
        type: inputTypes.password,
        columns: "col-12",
        rows: 10,
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
        name: "signup",
        displayName: "Submit",
        disabled: false,
        action: "handleSubmit",
        type: inputTypes.button,
        formSubmit: true,
        submitType: "signup",
        variant: "primary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-12",
    },
]