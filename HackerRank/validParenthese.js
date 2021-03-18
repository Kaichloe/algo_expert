function is_valid(text) {
    const stack = [];
    
    for (const character of text){
        
        switch(character){
            case "(": stack.push(")");
                break;
            case "[": stack.push("]");
                break;
            case "{": stack.push("}");
                break;
            default:
                let topStack = stack.pop();
                if (topStack !== character) return 0;
        }
    }
    return stack.length ? 0 : 1;
} 

// works for only if all are brackets 

function is_valid(text) {
    const stack = [];
    const openBrackets = "({[";
    const closedBrackets =")}]";
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    
    for (const currChar of text){
        if (openBrackets.includes(currChar)){
            stack.push(brackets[currChar]);
        } else if (closedBrackets.includes(currChar)){
            let topElement = stack.pop();
            if (topElement !== currChar) return 0;
        }
    }
    
    return stack.length ? 0 : 1;
}

// works for both if all brackets and has letters in it
