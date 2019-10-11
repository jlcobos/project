export function reducer(acc,form): {name: string}[] {
    if (form.type === "checkbox") {
        form.choices.map(choice => acc[choice.name] = choice.value)
    } 
    else acc[name] = form.value;
    return acc
}