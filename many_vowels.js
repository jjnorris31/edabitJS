/*
Create a function that takes a string and returns the number (count) of vowels contained within it.
Examples
"Celebration" ➞ 5

"Palm" ➞ 1

"Prediction" ➞ 4
*/

function countVowels(str) {
    return str.match(/[aeiou]/g).length;
}
