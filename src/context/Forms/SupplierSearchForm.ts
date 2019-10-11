import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";

export const supplierSForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
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
]

// {
//     checkboxList: [
//         {name: "all", checked: false},
//         {name: "buy-america", checked: false},
//         {name: "by-america", checked: false},
//         {name: "woman-owned", checked: false},
//         {name: "minority-owned", checked: false},
//         {name: "green-certified", checked: false},
//         {name: "established-product", checked: false},
//         {name: "iso-certified", checked: false},
//         {name: "local", checked: false},
//     ],
//     yearsInOp: {
//         name: "years-in-operation",
//         values: new Array(100).fill().map((_, i) => (i + 1).toString()),
//         ["years-in-operation"]: null,
//     }
// }