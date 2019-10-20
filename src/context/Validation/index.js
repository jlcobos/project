import {isEmpty, isEmail, isLength} from 'validator';

export function isValid(form){
    const errors = [];
    let password;
    form.forEach(input => {
        console.log(input.validation);
        const {name, type, value,  validation: {required, lengthRequired, length}} = input;
        if (required && isEmpty(value)) {
            errors.push({name: name, message: `Field cannot be empty`});
            return {result: false, errors};
        }
        if (type === "email" && !isEmail(value)) errors.push({result: false, name: name, message: `Invalid email`});
        if (lengthRequired && !isLength(value, {min: length.min, max: length.max})) errors.push({name: name, message: `Field must be between ${length.min} and ${length.max} characters long`});
        if (input.name === "password") password = input.value;
        if (input.name === "confirmPassword" && input.value !== password) errors.push({result: false, name: name, message: `passwords do not match`});
        // equals(p1, p2) && (errors.passwordsNotEqual = `Password and password confirm do not match.`)
    })

    if (errors.length === 0) return { result: true }
    else return {result: false, errors};
}