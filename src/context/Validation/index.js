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
    const result = form.map(input => {
        if (input.type === inputTypes.button || input.type === inputTypes.checkbox) return input;

        let {name, type, value, displayName, validation: {validationType, required, lengthRequired, length}} = input;

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

            if (validationType === validationTypes.string) input.validation.validationMessage = `${displayName} must be at least ${length.min} to ${length.max} characters long`;
            if (validationType === validationTypes.string && length.min === length.max) input.validation.validationMessage = `${displayName} must be characters`;
        }

        const password = form.find(i => i.name === "password");
        if (!isEmpty(password.value)) {
            if (name === "confirmPassword" && value !== password.value) {
                input.validation.valid = false;
                input.validation.validationMessage = "passwords do not match";
                errors++;
            }

        }

        return input;
    });

    if (errors.length === 0) return { isValid: true, form }
    else return {isValid: false, errors};
}