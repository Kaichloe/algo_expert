var generate = function(numRows) {
    let output = [[1]]
    if (numRows === 1) return output;
    
    for (let i = 2; i <= numRows; i++){
        let row = new Array(i);
        let last = output.length - 1;
        row[0] = 1; 
        row[row.length - 1] = 1;
    
        for (let j = 1; j < row.length - 1; j++){
            let previous = output[last];
            if (row[j] === undefined){
                row[j] = previous[j - 1] + previous[j];
            };
        }
        output.push(row);
    }
    return output;
};