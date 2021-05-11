def mergeArray(arrLeft, arrRight)
  arrayMerged = []
  
  while !arrLeft.empty? && !arrRight.empty?
    arrayMerged.push(arrLeft[0] > arrRight[0] ? arrRight.shift : arrLeft.shift)
  end 
  
  while !arrLeft.empty?
    arrayMerged.push(arrLeft.shift)
  end 
  
  while !arrRight.empty?
    arrayMerged.push(arrRight.shift)
  end 
  
  return arrayMerged
end 

def mergeSort(arr)
  return arr if arr.length < 2
  middle = arr.length / 2
  left_array = arr[0, middle]
  right_array = arr[middle, arr.length]
  left_ordered = mergeSort(left_array)
  right_ordered = mergeSort(right_array)
  return mergeArray(left_ordered, right_ordered)
end

arr = [7, 7 ,7 , 4 , 4 , 1 , 1 , 2 , 0, 0, 8, -1]
mergeSort(arr)