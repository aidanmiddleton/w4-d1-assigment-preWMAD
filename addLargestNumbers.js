// function will take in an array, and add the two biggest numbers in the array
// [10, 4, 34, 6, 92, 2]
const addLargestNumbers = function(data) {
  let largestNumber = 0;
  let secondLargestNumber = 0;
    
  for (i = 0; i < data.length; i++){

    if (data[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = data[i];
    } else if (data[i] > secondLargestNumber) {
      secondLargestNumber = data[i];
    }
    

  }

  return largestNumber + secondLargestNumber;

};
  
  console.log(addLargestNumbers([1, 10]));
  // should return 11
  console.log(addLargestNumbers([1, 2, 3]));
  // should return 5
  console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
  // should return 126