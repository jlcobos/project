import {IInput, inputTypes} from "./FormInterfaces";

interface Iresult {[isProperty: string]: string | boolean | number};

export function formReducer(form: any): Iresult {
    const formInputs = form.inputs.reduce((acc: Iresult, input: any): Iresult => {
        if (input.type === "dropdown") {
            input.choices.map((choice: any):any => acc[choice.name] = choice.value)
        } else if (input.type !== "button" && input.type !== "button") acc[input.name] = input.value;
        return acc;
    },{});
    return formInputs;
}

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