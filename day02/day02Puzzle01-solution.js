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

const gameOutcomes = {
    'A': { // rock
	'X': 3, // rock rock, draw
	'Y': 6, // rock paper, win
	'Z': 0 // rock scissors, lose
    },
    'B': { // paper
	'X': 0, // paper rock, lose
	'Y': 3, // paper paper, draw
	'Z': 6 // paper scissors, win
    },
    'C': { // scissors
	'X': 6, // scissors rock, win
	'Y': 0, // scissors paper, lose
	'Z': 3 // scissors scissors, draw
    },
}
const shapeScore = {
    'X': 1, // rock
    'Y': 2, // paper
    'Z': 3, // scissors
}

const input = fs.readFileSync('input.txt', 'utf8').split('\n');
console.log(input);
const games = input.map(line => line.split(' '));
console.log(games);
const score = games.reduce((score, game) => {
    score += gameOutcomes[game[0]][game[1]];
    score += shapeScore[game[1]];
    return score;
}, 0);
console.log(score);




