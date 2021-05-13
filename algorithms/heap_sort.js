const swap = (input, indexA, indexB) => {
  const aux = input[indexA];

  input[indexA] = input[indexB];
  input[indexB] = aux;
}

const maxHeap = (input, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if(left < arrLength && input[left] > input[max])
    max = left;

  if(right < arrLength && input[right] > input[max])
    max = right;

  if(max != i){
    swap(input, i, max);
    maxHeap(input, max);
  }
}

const heapSort = (arr) => {
  arrLength = arr.length;

  for(let i = Math.floor(arrLength / 2); i >= 0; i -= 1)
    maxHeap(arr, i);

  for(i = arrLength - 1; i > 0; i--){
    swap(arr, 0, i);
    arrLength--;

    maxHeap(arr, 0);
  }
  
  return arr
}
const arrSorted = heapSort([1, 9, 18, 2, 3, 0]);
console.log(arrSorted)