var inquirer = require("inquirer");
 var quiz = require("./questions");
var completeCard = require("./completeCard.js");
var questions = require("./questions.js").questions;
//var quiz = questions.quiz;
//var quizArray = [];

var closeQuiz = [];
for (var i = 0; i < quiz.length; i++){
    var q = new completeCard.fullCard(quiz[i].full, quiz[i].cloze);
    closeQuiz.push(q);
  }

  var currentQuestion = 0;
  var answerRight = 0;
  var answerWrong = 0;

  function askQuestions(){
    inquirer.prompt([
      {
        name: "userGuess",
        type: "input",
        message: closeQuiz[currentQuestion].partial + '\nAnswer'
      }
    ]).then(function(answer){
      console.log('\n')
  if(answer.userGuess === closeQuiz[currentQuestion].cloze) {

    console.log("Correct!");
    answerRight++;
  } else{
    console.log("Incorrect!");
    answerWrong++;
   }
   currentQuestion++;
   if (!!closeQuiz[currentQuestion]){
     askQuestions();
   }else{
     console.log("GAME OVER!");
     console.log(answerRight + " Right");
     console.log(answerWrong + " Wrong");
   }
 })
 }
 askQuestions();
