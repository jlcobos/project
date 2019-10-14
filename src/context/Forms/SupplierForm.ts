import { IInputProps, ICheckboxProps, IButtonProps, inputTypes } from "./FormInterfaces";
import { reducer } from "./FormMethods";

export const supplierForm: Array< IInputProps | ICheckboxProps | IButtonProps>  = [
    {
        name: "firstName",
        label: false,
        displayName: "First Name",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 40,
        }
    },
    {
        name: "lastName",
        label: false,
        displayName: "Last Name",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 40,
        }
    },
    {
        name: "jobTitle",
        label: false,
        displayName: "Job Title",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 40,
        }
    },
    {
        name: "companyName",
        label: false,
        displayName: "Company Name",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 40,
        }
    },
    {
        name: "address",
        label: false,
        displayName: "Address",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 240,
        }
    },
    {
        name: "stateOrProvince",
        label: false,
        displayName: "State or Province",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 40,
        }
    },
    {
        name: "city",
        label: false,
        displayName: "City",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 100,
        }
    },
    {
        name: "postalCode",
        label: false,
        displayName: "Postal Code",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 5,
        }
    },
    {
        name: "country",
        label: false,
        displayName:"Country",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 100,
        }
    },
    {
        name: "mobileNumber",
        label: false,
        displayName:"Mobile Number",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 10,
        }
    },
    {
        name: "officeNumber",
        label: false,
        displayName:"Office Number",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 10,
        }
    },
    {
        name: "email",
        label: false,
        displayName:"Email",
        value: "",
        type: inputTypes.email,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 100,
            type: inputTypes.email,
        }
    },
    {
        name: "classification",
        label: false,
        displayName:"Classification",
        value: "",
        type: inputTypes.email,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 20,
        }
    },
    {
        name: "yearFounded",
        label: false,
        displayName:"Year Founded",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 4,
        }
    },
    {
        name: "website",
        label: false,
        displayName:"Website",
        value: "",
        type: inputTypes.text,
        columns:"col-6",
        inputClass: "",
        validation: {
            length: 100,
        }
    },
    {
        name: "qualityCertifications",
        label: false,
        displayName:"Quality Certifications",
        value: "",
        type: inputTypes.text,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 20,
        }
    },
    {
        name: "numberOfLocations",
        label: false,
        displayName:"Number Of Locations",
        value: "",
        type: inputTypes.number,
        columns: "col-6",
        inputClass: "",
        validation: {
            length: 4,
            type: inputTypes.number,
        }
    },
    {
        name: "employeeSize",
        label: false,
        displayName:"Employee Size",
        value: "",
        type: inputTypes.number,
        columns: "col-6",
        inputClass: "",
        validation: {
            type: inputTypes.number,
            length: 6,
        }
    },
    {
        name: "annualSales",
        label: false,
        displayName:"Annual Sales",
        value: "",
        type: inputTypes.number,
        columns: "col-6",
        inputClass: "",
        validation: {
            type: inputTypes.number,
            length: 12,
        },
    },
    {
        name: "diversityAndOwnership",
        header: "Diversity and Ownership",
        withHeader: true,
        type: "checkbox",
        list: true,
        inline: false,
        checkboxClass: "",
        labelClass: "",
        columns: "col-12",
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
        withHeader: true,
        type: "checkbox",
        list: false,
        inline: false,
        checkboxClass: "",
        labelClass: "",
        columns: "col-12",
        choices: [{name: "portfolio", displayName: "Portfolio", value: false}],
    },
    {
        name: "SupplierSignupSubmit",
        displayName: "Submit",
        withAction: true,
        disabled: false,
        action: "handleSubmit",
        type: "button",
        formSubmit:true,
        variant: "primary",
        wrapperClass: "",
        buttonClass: "",
        columns: "col-3",
    },

]