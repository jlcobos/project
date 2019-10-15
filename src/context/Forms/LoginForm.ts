import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const loginForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "email",
        label: false,
        displayName: "email",
        value: "",
        type: inputTypes.email,
        columns: "col-12",
        inputClass: "",
        validation: {
            lengthRequired: false,
            required: true,
            type: "email",
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
            length: {min: 8, max: 16},
        }
    },
    {
        name: "login",
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