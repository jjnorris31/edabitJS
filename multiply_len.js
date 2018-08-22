/*
Create a function to multiply all values in an array by the amount of values in that array.
Examples
[2, 3, 1, 0] ➞ [8, 12, 4, 0]
*/

function MultiplyByLength(arr) {
	len = arr.length;
	for (var i = 0; i < len; i++){
		arr[i] = arr[i] * len
	} return arr
}
