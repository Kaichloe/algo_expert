function find_repeated_sequences(s) {
    const sequences = {};
    let repeatedCount = 0;
    
    for (let i = 0; i < s.length - 9; i++){
        const subString = s.substr(i, 10);

        if (!sequences[subString]){
            sequences[subString] = true;
        }else 
            repeatedCount++;
    }
    return repeatedCount;
}

// doesnt work for all as it counts dups 

function find_repeated_sequences(s) {
    const sequences = new Set();
    const result = new Set();
    
    for (let i = 0; i < s.length - 9; i++){
        const subString = s.substr(i, 10);
        
        if (sequences.has(subString) && !result.has(subString)){
            result.add(subString);
        } else {
            sequences.add(subString);
        }
    }
    return result.size;
}

// double set to eli dups 
