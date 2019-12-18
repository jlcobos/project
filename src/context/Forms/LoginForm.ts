import { IForm, IInput, inputTypes, Columns, Variant } from "./FormInterfaces";
import { ICreateOrLoginUser } from "../Models/Users"

export const loginForm: IForm  = {
    formName: "loginForm",
    inputs: [
        {
            name: "email",
            label: true,
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
            label: true,
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
            wrapperClass: "my-3",
            inputClass: "",
        },
    ],
    getValues: getValues,
    getValuesHelper: getValuesHelper,
}

function getValuesHelper(form: IForm, name: string): any { 
    const input: any = form.inputs.find((input: IInput) => input.name === name);
    return input.value;
}

function getValues(this: IForm):ICreateOrLoginUser {
    return {
        email: getValuesHelper(this,"email"),
        password: getValuesHelper(this, "password"),
    }
}