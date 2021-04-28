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

function recursive_binary_search(arr, value, lower=0, high=null){
  arr.sort((a, b) => a - b);
  
  if(high < lower) return null;
  if(high === null) high = arr.length - 1;

  let middle = Math.floor((high + lower) / 2);

  if(arr[middle] === value){
    return middle;
  }else if(arr[middle] > value){
    return recursive_binary_search(arr, value, lower, middle - 1);
  }else{
    return recursive_binary_search(arr, value, middle + 1, high);
  }
}

binary_search([2, 3, 6, 1, 0], 3)
recursive_binary_search([2, 3, 6, 1, 0], 3)