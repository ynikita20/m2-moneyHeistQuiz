let readlineSync = require("readline-sync");

const chalk = require('chalk');

let score = 0;

// data of high score

let highScores = [
  {
    name: "Nikita",
    score: 4,
  },

  {
    name: "Vini",
    score: 3,
  },
]

// array of objects
let questions = [{
  question: "what is money heist❔ " + chalk.cyanBright("a)movie b)web series c)movie  "),
  answer: "b"
}, 
  
{
  question: "When was money heist released❔"+  chalk.cyanBright("a)2 May 2017 b)12 Aug 2017 c)23 Seot 2017  "),
  answer: "a"
}, 
  
{
  question: "what was the reel name of professor❔ " + chalk.cyanBright("a)Lisbon b)Alvaro Morte c)Tokyo  "),
  answer: "b"
}, 

{
  question: "What was the name of masks that they wore?"+ chalk.cyanBright("a)Dali b)Mickey c)Rosa  "),
  answer: "a"
},
{
  question: "Where did the heist happened?"+ chalk.cyanBright("a)India b)Spain  c)USA  "),
  answer: "b"
}
];

function welcome() {
 let userName = readlineSync.question(("What's your name? "));

  console.log("Welcome "+ chalk.cyanBright(userName) + "!  HAVE YOU WATCHED " + chalk.bold(" MONEY HEIST ") + "?");
  console.log(chalk.underline('Just type the option initial(a,b, or c)'));
  console.log(' ')
}


// play function
function play(question, answer) {
  
  let userAnswer = readlineSync.question(chalk.yellowBright(question));
  

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("✅ right ✅"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("❌ wrong ❌"));
   
  }

  console.log(chalk.black.bgWhite.bold ("current score: ", score));
  console.log("-------------")
} 

function game() {
  for (let i=0; i<questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}




function showLeaderBoard() {
  
  console.log(' ')
  console.log(chalk.green("Check out the Leaderboard"));

  highScores.map(score => console.log(score.name, " : ", score.score))
}

function updateHightScore(highScores){
  console.log(' ')
  console.log("YAY! You SCORED: ", score);

  if(score > highScores[0].score){
    console.log(chalk.green('Congratulations on beating all previous High Scores. Make sure to send me a Screenshot, so that I can update about your achievement 😃 '));
} 
  }
  
welcome();
game();
updateHightScore(highScores);
showLeaderBoard();

