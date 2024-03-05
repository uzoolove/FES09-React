var score = [ 100, 90, 80 ];

var newScore = [ ...score ];
newScore[1] = 95;

console.log(score, newScore);
console.log(score === newScore);