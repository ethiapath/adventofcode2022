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


// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array
const max = elfCalories.reduce((a, b) => Math.max(a, b), -Infinity);

console.log(`Elf with most calories ${max}`);

