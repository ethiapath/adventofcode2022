const fs = require('fs');

const input = fs.readFileSync('input.txt', {encoding: 'utf8'});

const calorieArray = input.split('\n').map(e => e === '' ? '' : parseInt(e, 10));

const elfCalories = [0];
let numElf = 0;

calorieArray.forEach(calorie => {
	if (calorie !== '') {
		elfCalories[numElf] += calorie;
	} else {
		elfCalories.push(0);
		numElf++;
	}
});

const sortedElfCalories = elfCalories.sort((a, b) => b - a);

console.log(`Elf with first most calories ${sortedElfCalories[0]}`);
console.log(`Elf with second most calories ${sortedElfCalories[1]}`);
console.log(`Elf with thrid most calories ${sortedElfCalories[2]}`);

console.log(`Total calories carried by three elves with most calories ${
	sortedElfCalories[0]
	+ sortedElfCalories[1]
	+ sortedElfCalories[2]
}`);

