// start and finish array and road size given. what is the largest gap b/w cars after they finish **longest consect places cars have not visited

function widestGap(n, start, finish) {
    let road = new Array(n).fill(false);
    let cars = start.length;
    let i = 0
    let largestGap = null;
    let currentGap = 0
    
    while (i < cars){
        const begin = start[i] - 1;
        const end = finish[i];
        
        for (let pos = begin; pos < end; pos++){
            road[pos] = true;
        }
        i++
    }
    
    for (let index = 0; index < n; index++){
        let currentPos = road[index];
        if (currentPos === false){
            currentGap++;
        } else {
            currentGap = 0;
        }
        if (largestGap === null || currentGap > largestGap) largestGap = currentGap;
    }
    
    return largestGap;
}

// too slow 7/13 cases passed 