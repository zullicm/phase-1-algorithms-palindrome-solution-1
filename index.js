function reverse(word){

  // let splitString = word.split("")
  // let reverseArray = splitString.reverse()
  // let reversedWord = reverseArray.join("")
  // return reversedWord

  return word.split('').reverse().join('')

}

function isPalindrome(word) {
  let drow = reverse(word)
  return word === drow
}

/* 
  Add your pseudocode here
  1. This test is asking me to test for palindromes. Being this is something I havent
  done before, my first instinct is to either have a function that allows a 
  function to read something both foreward and back, or after reading the string,
  reverse the strings order and test again. The first solution seems to be too
  complicated for me just thinking about it so I will try the second first.

  Make a function that reads a string and IF string is === the string backward
  return true
*/

/*
  My first inclination was to turn the string into and array, allowing for better access
  to JS methods, then reversing it from there. After reversing the array itself turn
  it back into a string and save that under a new variable and test it against the old
  one.

  I split the string (using the .split() method) and then console logged it 
  ensuring it was actually split
  
  I then used the .reverse() method to reverse the string console logging to
  make sure I get the expected response

  I then went ahead and rejoined the strings with the .join() which is set to a variable

  Last step was a simple if else statment that tested the first string against the new
  revered one, if they were the same it would return true, else would return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
