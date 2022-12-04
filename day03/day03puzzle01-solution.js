const fs = require('fs');

const input = fs.readFileSync('input.txt', { encoding: 'utf8' }).split('\n');

console.log(input);


/*
Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
*/

/*
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
*/

function getPriority(char) {
	const charCode = char.charCodeAt(0);
	if (charCode >= 65 && charCode <= 91) {
		return charCode - 64;
	}
	if (charCode >= 97 && charCode <= 123) {
		return charCode - 96;
	}
}

const itemPriorites = {};
let priorityCounter = 0;

function appearsInBoth(rucksack) {
	const partA = Array.from(rucksack.split(0, rucksack.length/2));
	const partB = Array.from(rucksack.split(rucksack.length/2));

	partA.forEach(item => {
		if (partB.includes(item)) {
			itemPriorites[item] += getPriority(item)
			priorityCounter +=  getPriority(item)
		}
	});
}

input.forEach(rucksack =>{
	appearsInBoth(rucksack);
});

console.log(priorityCounter);



