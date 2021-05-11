const insertion_sort = (arr) => {
  let newArr = arr.concat();
  const isSmaller = (n1, n2) => n1 < n2; 
  
  for (let index = 1; index < newArr.length; index++) {
    let currentIndex = index;
    let previousIndex = index - 1;
    debugger;
    while(isSmaller(newArr[currentIndex], newArr[previousIndex])){
      aux = newArr[previousIndex];
      newArr[previousIndex] = newArr[currentIndex];
      newArr[currentIndex] = aux;
      currentIndex = previousIndex;
      previousIndex -= 1;
    }
  }

  console.log(newArr);
}

insertion_sort([5, 7, 1, 2, 0]);