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
            required: true,
            lengthRequired: false,
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
            required: true,
            lengthRequired: true,
            length: {min: 8, max: 16}
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
            required: true,
            lengthRequired: true,
            length: {min: 8, max: 16}
        }
    },
    {
        name: "signup",
        displayName: "Submit",
        withAction: true,
        disabled: false,
        action: "handleSubmit",
        type: "button",
        formSubmit: true,
        variant: "primary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-12",
    },
]