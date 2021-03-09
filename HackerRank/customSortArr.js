// min ele swaps to get first half of the array even and second half of array odd

function moves(arr) {
    let oddCount = 0;
    let evenCount = 0;
    let minMoves = 0;
    
    for (let i = 0; i < arr.length; i++){
        if ( arr[i] % 2 === 0){
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    const evenHalfArr = arr.slice(0,evenCount);
    
    for (let j = 0; j < evenHalfArr.length ; j++){
        const currentNum = evenHalfArr[j];
        
        if (currentNum % 2 !== 0){
            minMoves++;
        }
    }
    
    return minMoves;
}