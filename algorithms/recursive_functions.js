// Question I - Return a sum of numbers
function sum_array(arr){
  if(arr.length === 1) return arr[0];
  return arr[0] + sum_array(arr.slice(1));
}

console.log(sum_array([1, 2, 3, 4, 5, 6]))

// Question II - Count tot elements in a list
function count(arr){
  if(arr.length === 0){
    return 0;
  }else{
    return 1 + count(arr.slice(1));
  }
}

console.log(count([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

// Question III - Find the max value in a list
function findMaxNumber(arr){
  if(arr.length === 1) return arr[0];
  arr[0] < arr[1] ? arr.splice(0, 1) : arr.splice(1, 1);
  return findMaxNumber(arr);
}

console.log(findMaxNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Question IV - Find the min value in a list
function findMinNumber(arr){
  if(arr.length === 1) return arr[0];
  arr[0] > arr[1] ? arr.splice(0, 1) : arr.splice(1, 1);
  return findMinNumber(arr);
}

console.log(findMinNumber([1, 5, 4, 9, 2, 0, 7, -1, 3]));