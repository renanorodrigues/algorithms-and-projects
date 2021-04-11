/*
  *** The Problem ***
  Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

  The range will be an array of two numbers that will not necessarily be in numerical order.

  For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  let minNumber = Math.min(arr[0], arr[1]);
  let maxNumber =  Math.max(arr[0], arr[1]);
  let integers = [];
  let factorsPrimes = [];
  let primes = [];
  let index = 0;

  const getPrimes = function(maxInteger){
    let sieve = [], i, j, primes = []; 
    for(i = 2; i <= maxInteger; ++i){
      if(!sieve[i]){
        primes.push(i);
        for(j = i << 1; j <= maxInteger; j += i) sieve[j] = true;
      }
    }
    return primes;
  }

  primes = getPrimes(maxNumber);

  if(maxNumber - minNumber > 1){
    for(let j = minNumber; j <= maxNumber; j++)
      integers.push(j);
  }

  while(index <= primes.length - 1){
    while(integers.some(int => int % primes[index] === 0)){
      let countDivisions = 0;
      for(let intIndex = 0; intIndex <= integers.length - 1; intIndex++){
        if(integers[intIndex] % primes[index] !== 0) continue;
        integers[intIndex] /= primes[index];
        countDivisions++;
      }
      if(countDivisions !== 0) factorsPrimes.push(primes[index]);
    }
    index++;
  }

  return factorsPrimes.reduce((totMultiplication, value) => totMultiplication *= value);

}


console.log(smallestCommons([23, 18]));