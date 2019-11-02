import {ICheckboxProps, IInputProps, IButtonProps, IChoices, inputTypes} from "./FormInterfaces";

interface Iresult {[isProperty: string]: string | boolean | number};

export function formReducer(form: any): Iresult {
    const result = form.reduce((acc: Iresult, input: any): Iresult => {
        if (input.type === "checkbox" || input.type === "dropdown") {
            input.choices.map((choice: IChoices):any => acc[choice.name] = choice.value)
        } else if (input.type !== "button" && input.type !== "button") acc[input.name] = input.value;
        return acc;
    },{});
    return result;
}

export function clearForm(form: any) {
    return form.map((input: any) => {
        if(input.hasOwnProperty("value")) {
            input.value = "";
        } else if (input.type === inputTypes.checkbox) {
            input.choices.forEach((ch: IChoices, i: number) => input.choices[i].value = false);
        }
        return input;
    });
}