import { IInputProps, ICheckboxProps, IButtonProps, inputTypes, IDropdownProps } from "./FormInterfaces";

export const supplierSearchForm: Array< IInputProps | ICheckboxProps | IButtonProps | IDropdownProps>  = [
    {
        name: "supplierSearch",
        header: "Search by Category",
        withHeader: false,
        type: inputTypes.checkbox,
        list: true,
        inline: false,
        checkboxClass: "",
        labelClass: "",
        columns: "col-12",
        choices: [
            {name: "all", displayName: "All", value: false},
            {name: "buyAmerica", displayName: "Buy America", value: false},
            {name: "byAmerica", displayName: "By America", value: false},
            {name: "womanOwned", displayName: "Woman Owned", value: false},
            {name: "minorityOwned", displayName: "Minority Owned", value: false},
            {name: "greenCertified", displayName: "Green Certified", value: false},
            {name: "establishedProduct", displayName: "Established Product", value: false},
            {name: "isoCertified", displayName: "ISO Certified", value: false},
            // {name: "local", displayName: "Local", value: false},
        ],
    },
    {
        name: "yearsInOperation",
        displayName: "Years in Operation",
        type: inputTypes.dropdown,
        dropdownClass: "",
        columns: "",
        value: "",
        validation: {
            validationType: "string",
            valid: null,
            required: true,
            lengthRequired: false,
            validationMessage: "",

        },
        choices: [
            {name: "yearsInOperation", displayName: "", value: " "},
            {name: "yearsInOperation", displayName: "Any", value: "Any"},
            {name: "yearsInOperation", displayName: "0-5 Years", value: "0-5"},
            {name: "yearsInOperation", displayName: "5-10 Years", value: "5-10"},
            {name: "yearsInOperation", displayName: "10-15 Years", value: "10-15"},
            {name: "yearsInOperation", displayName: "20+ Years", value: "20+"},
        ]
    },
    {
        name: "supplierSearchSubmit",
        displayName: "Search",
        disabled: false,
        action: "handleSubmit",
        type: inputTypes.button,
        submitType: "api",
        variant: "primary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-3",
    },
];