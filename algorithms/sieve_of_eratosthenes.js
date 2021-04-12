// Get all primes between two integers 
// In Portuguese this algorithm is called 'Crivo de Eratóstenes'

function sieveAlgo(rangeIntegers){
  // Min value integer to check in loop
  let maxInteger =  Math.max(rangeIntegers[0], rangeIntegers[1]);
  let sieve =[], i, j, primes = [];

  // Get all primes in array of integers
  for(i = 2; i <= maxInteger; ++i){
    if(!sieve[i]){
      primes.push(i);
      for(j = i << 1; j <= maxInteger; j += i) sieve[j] = true;
    }
  }

  return primes
}

console.log(sieveAlgo([1, 30]))
