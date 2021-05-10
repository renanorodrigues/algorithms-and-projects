const quicksort = (characters) => {
  const arr = [...characters]
  if(arr.length < 2) return arr;
  const pivo = arr[0];
  const lowerChars = arr.slice(1).filter(char => char.charCodeAt() <= pivo.charCodeAt());
  const higherChars = arr.slice(1).filter(char => char.charCodeAt() > pivo.charCodeAt());
  debugger
  return quicksort(lowerChars).concat([pivo], quicksort(higherChars));
}

quicksort("Churrasqueiras")