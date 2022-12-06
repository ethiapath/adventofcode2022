const fs = require('fs');

const input = fs.readFileSync('input.txt', { encoding: 'utf8' }).split('\n');

// console.log(input);


/*
Find the item type that appears in both compartments of each rucksack.
What is the sum of the priorities of those item types?
*/

/*
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
*/

function getPriority(char) {
	const charCode = char.charCodeAt(0);
	if (charCode >= 65 && charCode <= 91) {
		return charCode - 64 +26;
	}
	if (charCode >= 97 && charCode <= 123) {
		return charCode - 96;
	}
}

const itemPriorities = {};
let priorityCounter = 0;
const addItemToList = function(item) {
	if(!itemPriorities.hasOwnProperty(item)) {
		itemPriorities[item] = 0;
		itemPriorities[item] += getPriority(item)
	} else {
		itemPriorities[item] += getPriority(item)
	}
	priorityCounter += getPriority(item)
}

function appearsInBoth(rucksack) {
	const partA = rucksack.slice(0, rucksack.length/2);
	const partB = rucksack.slice(rucksack.length/2);
	console.log(rucksack)
	console.log(partA, partB);
	const inBothSet = new Set();

	for(let i = 0; i < partA.length; i++) {
		let item = partA[i];
		// console.log(`item: ${item} priority: ${getPriority(item)}`);
		if (partB.includes(item) && !inBothSet.has(item)) {
			inBothSet.add(item);
			console.log(`item: ${item} priority: ${getPriority(item)} counter: ${priorityCounter}`);
			addItemToList(item)
		}
	}
}


input.forEach(rucksack => {
	appearsInBoth(rucksack);
});
console.log(itemPriorities)

console.log(priorityCounter);


const sumItemPriorities = Object
	.values(itemPriorities)
	.reduce((acc, priority) => acc + parseInt(priority,10), 0)


console.log(sumItemPriorities);


