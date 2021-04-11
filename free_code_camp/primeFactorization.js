function primeFactorization(arr) {
  let minNumber = Math.min(arr[0], arr[1]);
  let maxNumber =  Math.max(arr[0], arr[1]);
  let integers = [];
  let factorsPrimes = [];
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  let index = 0;

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


console.log(primeFactorization([23, 18]));