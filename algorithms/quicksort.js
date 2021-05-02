function quicksort(arr){
  if(arr.length < 2) return arr;
  let pivo = arr[0];
  let lowerNumbers = arr.slice(1).filter(number => number <= pivo);
  let higherNumbers = arr.slice(1).filter(number => number > pivo);
  return quicksort(lowerNumbers).concat([pivo], quicksort(higherNumbers));
}

console.log(quicksort([10, 5, 2, 3, 11, 10, 10]))