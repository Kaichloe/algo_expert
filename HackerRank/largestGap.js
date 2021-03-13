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

function widestGap(n, start, finish){
    let lanes = [];
    let i = 0;

    while (i < start.length){
        lanes.push([start[i]], finish[i]);
        i++;
    }

    lanes = lanes.sort((a, b) => {
        if (a[0] !== b[0]){
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    })

    lanes.push([n+1, n+1]);
    let maxFinish = 0;
    let maxGap = 0;
    let j = 0;
    
    while (j < lanes.length){
        let start = lanes[j][0];
        let end = lanes[j][1];
        if (maxFinish < start) maxGap = Math.max(maxGap, start - maxFinish - 1)
        maxFinish = Math.max(maxFinish, end);
        j++
    }
    return maxGap
}