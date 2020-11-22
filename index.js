var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question('What is your name? ')

console.log('WELCOME! ',userName);

console.log("RULE:- You know me well, if yes give this quiz a try you will be awarded with 2 points if wrong no problem let's start..." + "Final score will be reveled at end" )

var highScore = [
  {
    name: 'Ajinkya',
    score: 10
  },
  {
    name: 'Aditya',
    score: 8
  }
]

var myQuiz = [
  {
    question: 'What is my Surname? ',
    answer: 'Kunwar'
  },
  {
    question: 'Where is my hometown(city)? ',
    answer: 'muzaffarpur'
  },
  {
    question: 'Which sport I love to play? ',
    answer: 'football'
  },
  {
    question: 'Which is my favourite colour? ',
    answer: 'blue'
  },
  {
    question: 'Which is my dream destination? (Hint:- It is in India give it a guess)',
    answer: 'Kedarnath'
  }
]

function correctAnswer(question , answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log('going good :)');
    score =score+2;
  }
  else {
    console.log('aah your are wrong :(');
  }
 }

 for(var i=0; i<myQuiz.length; i++) {
   correctAnswer(myQuiz[i].question , myQuiz[i].answer);
 }
 console.log('------------------------------')
 console.log('Your final score is: ', score)
 

   if(highScore[0].score <= score) {
     console.log('CONGRATULATIONS you have beaten High score send me a screenshot to get your name in the high score list...')
   }
   else {
     console.log('Send a screen shot of your score to get your name inked in the score list..')
   }
 console.log('\n');
 console.log('HIGH SCORES');
 for(var j=0 ; j<highScore.length; j++){
   console.log(highScore[j].name,  ' ' , highScore[j].score);
 }