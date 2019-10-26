import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const rfpForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "subject",
        label: false,
        displayName: "Subject",
        value: "",
        type: inputTypes.text,
        columns: "col-12",
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
        name: "messageBody",
        label: false,
        displayName: "Message Body",
        value: "",
        type: inputTypes.textarea,
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
        name: "date",
        label: false,
        displayName: "Date",
        value: "",
        type: inputTypes.date,
        columns: "col-6",
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
        header: "CBC Requirements",
        type: inputTypes.checkbox,
        withHeader: false,
        list: false,
        inline: false,
        checkboxClass: "",
        labelClass: "",
        columns: "col-12",
        choices: [
            {
                name: "cbcRequirement", 
                displayName: "CBC Requirements", 
                value: false
            }
        ],
    },
    {
        name: "RfpSpecUpload",
        displayName: "File Upload",
        disabled: true,
        type: inputTypes.button,
        formSubmit: false,
        variant: "secondary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-3",
    },
    {
        name: "RfpSubmit",
        displayName: "Submit",
        disabled: false,
        action: "handleSubmit",
        type: inputTypes.button,
        formSubmit: true,
        variant: "primary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-3",
    },
]