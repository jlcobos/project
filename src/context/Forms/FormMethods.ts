import {ICheckboxProps, IInputProps, IButtonProps, CheckboxChoices} from "./FormInterfaces";
import { isProperty } from "@babel/types";
interface Iresult {[isProperty: string]: string | boolean | number};
export function formReducer(form: any): Iresult {
    const result = form.reduce((acc: Iresult, input: any): Iresult => {
        if (input.type === "checkbox") {
            input.choices.map((choice: CheckboxChoices):any => acc[choice.name] = choice.value)
        } else if (input.type !== "button" && input.type !== "button") acc[input.name] = input.value;
        return acc;
    },{});
    return result;
}