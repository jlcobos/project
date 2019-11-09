import { IForm, IInput, inputTypes, Columns, Variant } from "./FormInterfaces";

export const rfpForm: IForm  = {
    formName: "rfpForm",
    inputs: [
        {
            name: "bidrequestName",
            label: false,
            displayName: "Bid Request Name",
            value: "",
            type: inputTypes.text,
            columns: Columns.col12,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: true,
                length: {min: 1, max: 500},
                validationMessage: "",
            }
        },
        {
            name: "messageToBidders",
            label: false,
            displayName: "Message To Bidders",
            value: "",
            type: inputTypes.textarea,
            columns: Columns.col12,
            rows: 10,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: true,
                length: {min: 1, max: 3000},
                validationMessage: "",
            }
        },
        {
            name: "date",
            label: false,
            displayName: "Date",
            value: "",
            type: inputTypes.date,
            columns: Columns.col6,
            inputClass: "",
            validation: {
                validationType: "date",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "cbcRequirements",
            displayName: "CBC Requirements",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "RfpSpecUpload",
            displayName: "File Upload",
            label: false,
            value: "",
            disabled: true,
            type: inputTypes.button,
            submitType: "api",
            variant: Variant.secondary,
            wrapperClass: "",
            inputClass: "",
            columns: Columns.col6,
        },
        {
            name: "RfpSubmit",
            displayName: "Submit",
            label: false,
            value: "",
            disabled: false,
            action: "handleSubmit",
            type: inputTypes.button,
            submitType: "api",
            variant: Variant.primary,
            wrapperClass: "",
            inputClass: "",
            columns: Columns.col6,
        },
    ],
    getValues: getValues,
    getValuesHelper: getValuesHelper,
}

function getValuesHelper(form: IForm, name: string): any { 
    const input: any = form.inputs.find((input: IInput) => input.name === name);
    return input.value;
}

function getValues(this: IForm):any {
    return {
        bidrequestName: getValuesHelper(this,"bidrequestName"),
        messageToBidders: getValuesHelper(this, "messageToBidders"),
        date: getValuesHelper(this, "date"),
        cbcRequirements: getValuesHelper(this, "cbcRequirements"),
    }
}