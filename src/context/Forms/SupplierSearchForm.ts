import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const supplierSearchForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
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
        name: "supplierSearch",
        header: "Search by Category",
        withHeader: false,
        type: "checkbox",
        list: true,
        inline: false,
        checkboxClass: "",
        labelClass: "",
        columns: "",
        choices: [
            {name: "all", displayName: "All", value: false},
            {name: "buy-america", displayName: "Buy America", value: false},
            {name: "by-america", displayName: "By America", value: false},
            {name: "woman-owned", displayName: "Woman Owned", value: false},
            {name: "minority-owned", displayName: "Minority Owned", value: false},
            {name: "green-certified", displayName: "Green Certified", value: false},
            {name: "established-product", displayName: "Established Product", value: false},
            {name: "iso-certified", displayName: "ISO Certified", value: false},
            // {name: "local", displayName: "Local", value: false},
        ],
    },
];