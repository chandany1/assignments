/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   const vowels = "aeiou";
   const lowerCaseStr = str.toLowerCase();
   let vowelsCount = 0;
   for(let i = 0 ; i < lowerCaseStr.length ; i++){
    if(vowels.includes(lowerCaseStr[i])){
      vowelsCount++;
    }
   }
   return vowelsCount;
  }

module.exports = countVowels;