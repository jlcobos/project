export function reducer(acc: any, input: any) {
    if (input.type === "checkbox") {
        input.choices.map((choice: any) => acc[choice.name] = choice.value)
    } 
    else acc[input.name] = input.value;
    return acc
}