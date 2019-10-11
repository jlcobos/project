import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";
import { reducer } from "./FormMethods";

export const supplierForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "firstName",
        displayName: "First Name",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "lastName",
        displayName: "Last Name",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "jobTitle",
        displayName: "Job Title",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "companyName",
        displayName: "Company Name",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "address",
        displayName: "Address",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 240,
        }
    },
    {
        name: "stateOrProvince",
        displayName: "State or Province",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 40,
        }
    },
    {
        name: "city",
        displayName: "City",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 100,
        }
    },
    {
        name: "postalCode",
        displayName: "Postal Code",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 5,
        }
    },
    {
        name: "country",
        displayName:"Country",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 100,
        }
    },
    {
        name: "mobileNumber",
        displayName:"Mobile Number",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 10,
        }
    },
    {
        name: "officeNumber",
        displayName:"Office Number",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 10,
        }
    },
    {
        name: "email",
        displayName:"Email",
        value: "",
        type: inputTypes.email,
        columns: "col-6",
        validation: {
            length: 100,
            type: inputTypes.email,
        }
    },
    {
        name: "classification",
        displayName:"Classification",
        value: "",
        type: inputTypes.email,
        columns: "col-6",
        validation: {
            length: 20,
        }
    },
    {
        name: "yearFounded",
        displayName:"Year Founded",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 4,
        }
    },
    {
        name: "website",
        displayName:"Website",
        value: "",
        type: inputTypes.text,
        columns:"col-6",
        validation: {
            length: 100,
        }
    },
    {
        name: "qualityCertifications",
        displayName:"Quality Certifications",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        validation: {
            length: 20,
        }
    },
    {
        name: "numberOfLocations",
        displayName:"Number Of Locations",
        value: "",
        type: inputTypes.number,
        columns: "col-6",
        validation: {
            length: 4,
            type: inputTypes.number,
        }
    },
    {
        name: "employeeSize",
        displayName:"Employee Size",
        value: "",
        type: inputTypes.number,
        columns: "col-6",
        validation: {
            type: inputTypes.number,
            length: 6,
        }
    },
    {
        name: "annualSales",
        displayName:"Annual Sales",
        value: "",
        type: inputTypes.number,
        columns: "col-6",
        validation: {
            type: inputTypes.number,
            length: 12,
        },
    },
    {
        name: "diversityAndOwnership",
        header: "Diversity and Ownership",
        type: "checkbox",
        list: true,
        withHeader: true,
        choices: [
            {name: "veteranOwned", displayName: "Veteran Owned", value: false,},
            {name: "minorityOwned", displayName: "Minority Owned", value: false,},
            {name: "womanOwned", displayName: "Woman Owned", value: false,},
            {name: "buyAmericaCompany", displayName: "Buy America Company", value: false,},
        ],
    },
    {
        name: "portfolio",
        header: "Portfolio",
        type: "checkbox",
        list: false,
        withHeader: true,
        choices: [{name: "portfolio", displayName: "Portfolio", value: false}],
    },
    {
        name: "SupplierSignupSubmit",
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

export const form = supplierForm.reduce(reducer, {});
