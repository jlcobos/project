import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const supplierSearchForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "supplierSearch",
        header: "Search by Category",
        withHeader: false,
        type: "checkbox",
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
        name: "supplierSearchSubmit",
        displayName: "Search",
        withAction: true,
        disabled: false,
        action: "handleSubmit",
        type: "button",
        formSubmit: false,
        variant: "primary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-3",
    },
];