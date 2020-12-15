// write a function that returns the sum of all the numbers that are either 'even', or 'odd'
// if not enough numbers return "Improper Input"

const conditionalAdding = function(values, condition) {

  if (values.length === 0) {
    return "Improper Input";
  }

  let oddSum = 0;
  let evenSum = 0;

  for (i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evenSum += values[i];
    } else {
      oddSum += values[i];
    }
  }

  if (condition === 'even') {
    return evenSum;
  } else {
    return oddSum;
  }

  // let result = 0;
  
  // if(condition === "even") {
  //   for (i = 0; i < values.length; i++) {
  //     if (values[i] % 2 === 0) {
  //       result += values[i];
  //     }
  //   }
  // }

  // if(condition === "odd") {
  //   for (i = 0; i < values.length; i++) {
  //     if (values[i] % 2 !== 0) {
  //       result += values[i];
  //     }
  //   }
  // }

  // return result;



};
  
  console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
  // should return 6
  console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
  // should return 9
  console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
  // should return 144
  console.log(conditionalAdding([], "odd"));
  // should return "improper input"