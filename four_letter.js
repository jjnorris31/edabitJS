/*
Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
Examples
["Ryan", "Kieran", "Jason", "Matt"] ➞ ["Ryan", "Matt"]

["Tomato", "Potato", "Pair"] ➞ ["Pair"]

["Kangaroo", "Bear", "Fox"] ➞ ["Bear"]
*/

function isFourLetters(arr) {
	result = [];
	for (var i = 0; i < arr.length; i++){
		if (arr[i].length == 4) {
			result.push(arr[i]);
		}
	} return result;
}
