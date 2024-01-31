/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const rawStr1 = str1.replace(/\s/g,'').toLowerCase();
    const rawStr2 = str2.replace(/\s/g,'').toLowerCase();

    if(rawStr1.length !== rawStr2.length){
      return false;
    }

    const sortedStr1 = rawStr1.split('').sort().join('');
    const sortedStr2 = rawStr2.split('').sort().join('');

    return sortedStr1==sortedStr2;
}

module.exports = isAnagram;
