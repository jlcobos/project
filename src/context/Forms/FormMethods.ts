import { inputTypes } from "./FormInterfaces";

export function clearForm(form: any) {
    form.inputs = form.inputs.map((input: any) => {
        if   (input.type === inputTypes.checkbox) input.value = false
        else input.value = "";

        return input;
    });
    return form;
}

export function updateForm(name: string, value: string, checked: boolean, form: any) {
    form.inputs = form.inputs.map((input: any) => {
        let validation;
        if(input.validation) validation = input.validation;

        if (input.name === name && input.type === inputTypes.checkbox) input.value = !input.value;
        else if(input.name === name ) {
            if (validation.lengthRequired && input.value.length < validation.length.max ) input.value = value
            else if (validation.lengthRequired && value.length >= validation.length.max) return input
            else input.value = value;
        }
        return input;
    });
    return form;
}