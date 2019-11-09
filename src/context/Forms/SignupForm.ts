import { IForm, IInput, inputTypes, Columns, Variant } from "./FormInterfaces";
import { ICreateOrLoginUser  } from "../Models/Users"

export const signupForm: IForm  = {
    formName: "signupForm",
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
            name: "confirmPassword",
            label: false,
            displayName: "Confirm Password",
            value: "",
            type: inputTypes.password,
            columns: Columns.col12,
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
            label: false,
            value: "",
            disabled: false,
            action: "handleSubmit",
            type: inputTypes.button,
            submitType: "signup",
            variant: Variant.primary,
            wrapperClass: "",
            inputClass: "",
            columns: Columns.col12,
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
        email:    getValuesHelper(this,"email"),
        password: getValuesHelper(this, "password"),
    }
}