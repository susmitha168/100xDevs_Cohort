/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    //Return false if string lengths are not equal
    return false;
  } else {
    //Removes empty spaces
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Remove special characters
  str1 = str1.replace(/[^\w]/g, '');
  str2 = str2.replace(/[^\w]/g, '');

  // Check if the sorted characters are the same
  return sortString(str1) === sortString(str2);
  }
}

function sortString(str) {
  return str.split('').sort().join('');
}

module.exports = isAnagram;
