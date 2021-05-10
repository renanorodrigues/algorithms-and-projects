function _merge(left, right){
  const resultArray = [];
  
  while(left.length && right.length){
    resultArray.push(left[0] > right[0] ? right.shift() : left.shift());
  }

  while(left.length) resultArray.push(left.shift());

  while(right.length) resultArray.push(right.shift());

  return resultArray;
}

function merge_sort(arr){
  if(arr.length < 2) return arr
  const middle = Math.floor(arr.length / 2);
  const array_left = arr.slice(0, middle);
  const array_right = arr.slice(middle, arr.length);
  const left = merge_sort(array_left);
  const right = merge_sort(array_right);
  debugger
  return _merge(left, right);
}

merge_sort([2, 46, 77, 13, 5, 8, 2, 55, 36, 3])

let inverse_array = [77, 55, 46, 36, 13, 8, 5, 3, 2, 2]
let repetitive_numbers = [5, 5, 5, 4, 6, 7, 7, 7, 3, 2, 1, 1, 1]