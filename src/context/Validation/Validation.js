import {isEmpty, isEmail, isLength} from 'validator';

export function isValid(form, values){
    const errors = [];
    form.forEach(input => {
        const {name, type,  validation: {required, lengthRequired, length}} = input;
        if (required && isEmpty(values[name])) {
            errors.push({name: name, message: `Field cannot be empty`});
            return {result: false, errors};
        }
        if (type === "email" && !isEmail(values[name])) errors.push({result: false, name: name, message: `Invalid email`});
        if (lengthRequired && !isLength(values[name], {min: length.min, max: length.max})) errors.push({name: name, message: `Field must be between ${length.min} and ${length.max} characters long`});
        // equals(p1, p2) && (errors.passwordsNotEqual = `Password and password confirm do not match.`)
    })

    if (errors.length === 0) return { result: true }
    else return {result: false, errors};
}