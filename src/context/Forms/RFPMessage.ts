import { IForm, IInput, inputTypes, Columns, Variant } from "./FormInterfaces";
import { IMessage } from "../Models/RFP"

export const rfpMessageForm: IForm  = {
    formName: "rfpMessageForm",
    inputs: [
        {
            name: "subject",
            label: false,
            displayName: "Subject",
            value: "",
            type: inputTypes.email,
            columns: Columns.col12,
            inputClass: "",
            validation: {
                validationType: "text",
                valid: null,
                lengthRequired: false,
                required: true,
                validationMessage: "",
            }
        },
        {
            name: "message",
            label: false,
            displayName: "Message",
            value: "",
            type: inputTypes.textarea,
            rows: 10,
            columns: Columns.col12,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "sendingOrganizationId",
            label: false,
            displayName: "Sender Organization",
            value: "",
            type: inputTypes.password,
            columns: Columns.col12,
            inputClass: "",
            wrapperClass: "hidden",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "senderUID",
            label: false,
            displayName: "Sender UID",
            value: "",
            type: inputTypes.password,
            columns: Columns.col12,
            inputClass: "",
            wrapperClass: "hidden",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "receivingOrganizationId",
            label: false,
            displayName: "Receiving Organization",
            value: "",
            type: inputTypes.password,
            columns: Columns.col12,
            inputClass: "",
            wrapperClass: "hidden",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "rfpMessage",
            displayName: "Send",
            disabled: false,
            label: false,
            value: "",
            action: "handleSubmit",
            type: inputTypes.button,
            submitType: "rfpMessage",
            variant: Variant.primary,
            columns: Columns.col12,
            wrapperClass: "",
            inputClass: "",
        },
    ],
    getValues: getValues,
    getValuesHelper: getValuesHelper,
}

function getValuesHelper(form: IForm, name: string): any { 
    const input: any = form.inputs.find((input: IInput) => input.name === name);
    return input.value;
}

function getValues(this: IForm):IMessage {
    return {
        sendingOrganizationId: getValuesHelper(this, "sendingOrganizationId"),
        senderUID: getValuesHelper(this, "senderUID"),
        receivingOrganizationId: getValuesHelper(this, "receivingOrganizationId"),
        subject: getValuesHelper(this, "subject"),
        message: getValuesHelper(this, "message"),
        dateSent: new Date(),
    }
}