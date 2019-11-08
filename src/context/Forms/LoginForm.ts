import { IForm, inputTypes, Columns, Variant } from "./FormInterfaces";

export const loginForm: IForm  = {

    formName: "loginForm",
    inputs: [
        {
            name: "email",
            label: false,
            displayName: "Email",
            value: "",
            type: inputTypes.email,
            columns: Columns.col12,
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
            columns: Columns.col12,
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
            label: false,
            value: "",
            action: "handleSubmit",
            type: inputTypes.button,
            submitType: "login",
            variant: Variant.primary,
            columns: Columns.col12,
            wrapperClass: "",
            inputClass: "",
        },
    ]
}