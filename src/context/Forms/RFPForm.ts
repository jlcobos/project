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
            length: 200,
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
            length: 5000,
        }
    },
    {
        name: "date",
        label: false,
        displayName: "Date",
        value: null,
        type: inputTypes.date,
        columns: "col-6",
        inputClass: "",
        validation: {
        }
    },
    {
        name: "cbcRequirements",
        header: "CBC Requirements",
        type: "checkbox",
        withHeader: false,
        list: false,
        inline: false,
        checkboxClass: "",
        labelClass: "",
        columns: "",
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
        type: "button",
        variant: "secondary",
        wrapperClass: "d-block",
        buttonClass: "",
        columns: "col-3",
    },
    {
        name: "RfpSubmit",
        displayName: "Submit",
        withAction: true,
        disabled: false,
        action: "handleSubmit",
        type: "button",
        variant: "primary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-3",
    },
]