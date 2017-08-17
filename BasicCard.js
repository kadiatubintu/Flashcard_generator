var inquirer = require("inquirer");
var quiz = require("./questions.js");
var displayCard = require("./displayCard.js");
var fullCard = require("./fullCard.js");

//var quiz = questions.quiz;
//var quizArray = [];

var closeQuiz = [];
for (var i = 0; i < quiz.length; i++){
    var q = new completeCard.ChoiceTwo(questions[i].full, questions[i].cloze);
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
    ]).then(function(answers){
      console.log('\n')
    })
  }

  if(answers.userGuess === closeQuiz[currentQuestion].cloze) {
    console.log("Correct!");
    answerRight++;
  } else{
    console.log("Incorrect!");
    answerWrong++;
  }
