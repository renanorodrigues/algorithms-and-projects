function binary_search(arr, response = null){
  let newArr = arr.concat();
  newArr.sort((a, b) => a - b);

  let value = response;
  let lowInt = 0;
  let higherInt = newArr.length - 1;


  while(lowInt <= higherInt){
    let middleInt = Math.floor((lowInt + higherInt) / 2);
    let kick = newArr[middleInt];

    if(kick === value){
      return middleInt;
    } else if(kick > value){
      higherInt = middleInt - 1;
    } else {
      lowInt = middleInt + 1;
    }
  }

  return null;
}

binary_search([2, 3, 6, 1, 0], 3)