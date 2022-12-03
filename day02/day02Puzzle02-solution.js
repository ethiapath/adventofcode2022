const fs = require('fs');




/*
A: Rock
B: Paper
C: Scissors

X: Rock
Y: Paper
Z: Scissors
/*

/*

total score is the sum of your scores for each round. 
The score for a single round is the score for the shape you selected 
(1 for Rock, 
2 for Paper, and 
3 for Scissors) 
plus the score for the outcome of the round 
(0 if you lost, 
3 if the round was a draw, and 
6 if you won).
*/

/*
The Elf finishes helping with the tent and sneaks back over to you. 
"Anyway, the second column says how the round needs to end: 
X means you need to lose, 
Y means you need to end the round in a draw, and 
Z means you need to win. Good luck!"
*/

const shapeScore = {
    'A': 1, // rock
    'B': 2, // paper
    'C': 3, // scissors
}

const gameOutcomes = {
    'A': { // rock
		'X': 0 + shapeScore['C'], // rock scissors, lose
		'Y': 3 + shapeScore['A'], // rock rock, draw
		'Z': 6 + shapeScore['B'] // rock paper, win
    },
    'B': { // paper
		'X': 0 + shapeScore['A'], // paper rock, lose
		'Y': 3 + shapeScore['B'], // paper paper, draw
		'Z': 6 + shapeScore['C'] // paper scissors, win
    },
    'C': { // scissors
		'X': 0 + shapeScore['B'], // scissors paper, lose
		'Y': 3 + shapeScore['C'], // scissors scissors, draw
		'Z': 6 + shapeScore['A'] // scissors rock, win
    },
}

const input = fs.readFileSync('input.txt', 'utf8').split('\n');
console.log(input);
const games = input.map(line => line.split(' '));
console.log(games);
const score = games.reduce((score, game) => {
    score += gameOutcomes[game[0]][game[1]];
    return score;
}, 0);
console.log(score);




