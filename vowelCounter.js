// write a function that counts the number of vowels in a given string and returns that value
// one potential solution may use the charAt() method, but this isnt the only solution
// you may also find the .includes() method useful.
//another useful couple of methods could be .split and .join
const vowelCounter = function(data) {
    let count = 0;
    
    const vowels = "AEIOUaeiou"

    for (i = 0; i < data.length; i++){
      if (vowels.includes(data[i])) {
        count += 1;
      }
    }


    return count;
};
  
  console.log(vowelCounter("orange"));
  // should return 3
  console.log(vowelCounter("Cornerstone"));
  // should return 4
  console.log(vowelCounter("aeiou"));
  // should return 5