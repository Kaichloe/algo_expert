// 0,1, nth fib === (n-1) + (n-2) return nth fib number
// 0,1,1,2,3,5
function getNthFib(n){
  if (n === 0){
    return 0
  }

  return getNthFib(n-1) + getNthFib(n - 2)
}

function getNthFib(n, memo = {1: 0, 2: 1}){
  if (n in memo){
    return memo[n];
  }else {
    memo[n] = getNthFib(n-1,memo) + getNthFib(n-2, memo);
    return memo[n];
  }
}

function getNthFib(n){
  const fibs = [0,1];
  let counter = 3

  while (counter <= n){
    const nextFib = fibs[0] + fibs[1];
    fibs[0] = fibs[1];
    fibs[1] = nextFib;
    counter++;
  }
  return n > 1 ? fibs[1] : fibs[0];
}

// iterative is best time and space at 0N and 01, memo is 0N both, recursive is 0(2^N) and 0N