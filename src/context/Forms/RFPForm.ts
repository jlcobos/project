import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const rfpForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "subject",
        displayName: "Subject",
        value: "",
        type: inputTypes.text,
        columns: "col-12",
        validation: {
            length: 200,
        }
    },
    {
        name: "messageBody",
        displayName: "Message Body",
        value: "",
        type: inputTypes.textarea,
        rows: 10,
        columns: "col-12",
        validation: {
            length: 5000,
        }
    },
    {
        name: "date",
        displayName: "Date",
        value: null,
        type: inputTypes.date,
        columns: "col-6",
        validation: {
        }
    },
    {
        name: "cbcRequirements",
        header: "CBC Requirements",
        type: "checkbox",
        withHeader: false,
        list: false,
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
        withAction: false,
        disabled: true,
        type: "button",
        variant: "secondary",
        wrapperClass: "d-block",
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
        columns: "col-3",
    },
]