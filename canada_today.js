/*
Your mission is to discover if Canada day holiday is occurring today or tomorrow.
Provided an array, supposing that all of the elements have contained the keyword ‘today’ or 'tomorrow'. ignoring letter case return the appropriate results.
Examples
['today','today','today','tomorrow','today','today','today','today','tomorrow','today','today'] ➞ []

['today','today','tomorrow','today','today','today','today','tomorrow','today','today','today'] ➞ []

['today','today','today','today','tomorrow','today','today','today','today','today','today'] ➞ []

['today','today','today','today',’today','today','today','today','today','today'] ➞ ['happy Canada day', 'joyeux jour du Canada']

*/

function celebratingTodayOrTomorrow(arry) {
    var setArry = new Set(arry);
    if (setArry.has('tomorrow')) {
        return [];
    } else {
        return ['happy Canada day', 'joyeux jour du Canada'];
    }
}
