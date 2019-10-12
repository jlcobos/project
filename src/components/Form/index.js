import Input from "./Input";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import { fromJS } from "immutable";
// import DropDown from "./Dropdown";

export default function Form({form}, action, blurAction, values){
    form.map(input => {
        if (input.type === "text") return <Input {...props} action={action} />
        else if (input.type === "textarea") return <Textarea {...props} action={blurAction} />
        else if (input.type === "checkbox") return <Checkbox {...props} values={values} />
        // else if (formProps.type === "dropdown") return <Input />
    });
}