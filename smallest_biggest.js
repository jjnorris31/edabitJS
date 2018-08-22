/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Examples
[1, 2, 3, 4, 5] ➞ [1, 5]

[2334454, 5] ➞ [5, 2334454]

[1] ➞ [1, 1]
*/

function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}
