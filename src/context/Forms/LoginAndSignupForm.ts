import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const loginAndSignupForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "email",
        label: false,
        displayName: "email",
        value: "",
        type: inputTypes.email,
        columns: "col-12",
        inputClass: "",
        validation: {
            length: 200,
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
            length: 16,
        }
    },
    {
        name: "confirmPassword",
        label: false,
        displayName: "ConfirmPassword",
        value: "",
        type: inputTypes.password,
        columns: "col-12",
        rows: 10,
        inputClass: "",
        validation: {
            length: 16,
        }
    },
    {
        name: "loginAndSignup",
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