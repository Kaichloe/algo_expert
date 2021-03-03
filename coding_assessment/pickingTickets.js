function maxTickets(tickets) {
    tickets.sort((a, b) => a - b);
    let maxSizeofArr = 1;
    let countOfSubArr = 1;
    
    for(let i = 1; i < tickets.length; i++){
        let previous = tickets[i - 1];
        let current = tickets[i];
        let diff = current - previous;
        if (diff > 1){
            countOfSubArr = 1;
        } else {
            countOfSubArr++;
        }
        if (countOfSubArr > maxSizeofArr){
            maxSizeofArr = countOfSubArr
        }
    }
    return maxSizeofArr;
}