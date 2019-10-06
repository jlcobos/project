export const rfpForm = [
    {
        name: "subject",
        displayName: "Subject",
        value: "",
        type: "text",
        columns: "col-12",
        validation: {
            length: 200,
        }
    },
    {
        name: "messageBody",
        displayName: "Message Body",
        value: "",
        type: "textarea",
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
        type: "date",
        columns: "col-6",
        validation: {
        }
    },
    {
        name: "cbcRequirements",
        header: "CBC Requirements",
        type: "checkbox",
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
        name: "RfpSubmit",
        displayName: "Submit",
        type: "button",
        variant: "primary",
        wrapperClass: "",
        columns: "col-3",
    },
]

export const form = rfpForm.reduce((acc, {name, value, choices, type}) => {
    if (type === "checkbox") {
        choices.map(choice => acc[choice.name] = choice.value)
    } 
    else acc[name] = value;
    return acc;
}, {});