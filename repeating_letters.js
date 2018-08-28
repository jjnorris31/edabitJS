/* Create a function that takes a string and returns a string in which each character is repeated once.
Examples
"String" ➞ "SSttrriinngg"

"Hello World!" ➞ "HHeelllloo  WWoorrlldd!!"

"1234!_ " ➞ "11223344!!__  " */

function doubleChar(str) {
	result = [];
	strArray = str.split("");
	for (var i = 0; i < str.length; i++) {
		result.push(strArray[i]);
		result.push(strArray[i]);
	} return result.join("");
}
