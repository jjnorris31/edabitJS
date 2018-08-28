/*
Your objectives :
Create a function named shortestDistance that take one string as argument.
The argument are 2 two points "x1,y1,x2,y2".
The function objective is to calculate distance from x and y.
Examples
shortestDistance("1,1,2,1") ➞ 1

shortestDistance("1,1,3,1") ➞ 2

shortestDistance("-5,1,3,1") ➞ 8

shortestDistance("-5,2,3,1")➞ 8.06

*/

function shortestDistance(str) {
	strPoints = str.split(",");
	return parseFloat(Math.hypot((strPoints[0] - strPoints[2]), (strPoints[1] - strPoints[3])).toFixed(2));
};
