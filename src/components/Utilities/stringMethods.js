const StringMethods = {
    toDisplayName: (str, charToSplitOn ) => {
        return str
            .split(charToSplitOn)
            .map(s => {
                if(s !== "and" && s !== "or" && s !== "of") {
                    return s[0].toUpperCase() + s.split("").splice(1).join("");
                } else {
                    return s;
                } 
        }).join(" ");
    },
} 
export default StringMethods;