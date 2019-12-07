import {isEmpty, isEmail, isLength} from 'validator';
import { inputTypes, validationTypes } from "../Forms/FormInterfaces";

// TODO: add type date and number string  && valid date && tel and url

// TODO: add error text to label not in placeholder?

// valid: boolean | null;
// required: boolean;
// validationMessage: string;
// lengthRequired: boolean;
// type: string;
// length?: {min: number; max: number};

export function validateForm(form){
    let errors = 0;
    form.inputs = form.inputs.map(input => {
        if (input.type === inputTypes.button || input.type === inputTypes.checkbox) return input;

        let {name, value, displayName, validation: {validationType, required, lengthRequired, length}} = input;

        input.validation.validationMessage = "";
        input.validation.valid = null;

        if (required && isEmpty(value)) {
            input.validation.valid = false;
            input.validation.validationMessage = `${displayName} Required`;
            errors++;
            return input;
        }
        if (validationType === validationTypes.email && !isEmail(value)) {
            input.validation.valid = false;
            input.validation.validationMessage = "Invalid Email Format"
            errors++;
        };
        if (lengthRequired && !isLength(value, {min: length.min, max: length.max})) {
            input.validation.valid = false;
            errors++;
            if (validationType === validationTypes.stringNumber) input.validation.validationMessage = `${displayName} must be at least ${length.min} to ${length.max} digits long`;
            if (validationType === validationTypes.stringNumber && length.min === length.max) input.validation.validationMessage = `${displayName} must be ${length.min} digits`;

            if (validationType === validationTypes.string) input.validation.validationMessage = `${displayName} must be ${length.min} to ${length.max} characters long`;
            if (validationType === validationTypes.string && length.min === length.max) input.validation.validationMessage = `${displayName} must be characters`;
        }

        const password = form.inputs.find(i => i.name === "password") || false;
        if ( password && !isEmpty(password.value)) {
            if (name === "confirmPassword" && value !== password.value) {
                input.validation.valid = false;
                input.validation.validationMessage = "Passwords do not match";
                errors++;
            }

        }

        return input;
    });
    if (errors === 0) return { isValid: true, form }
    else return {isValid: false, form};
}

export function scrollToInvalidElements(inputs) {
    const invalidInputs = inputs.map(inp => {
        if (inp.validation && inp.validation.valid === false) {
            return document.getElementById(inp.name);
        }
    }).filter(el => !!el);
    if (invalidInputs.length > 0) invalidInputs[0].scrollIntoView({behavior: "smooth", block: "center"});
}