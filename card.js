var completeCard = require("./completeCard.js");


//front and back flashcard
var question1 = new displayCard("How fast can honey bee fly?", "15mph");
console.log(question1.front);
console.log(question1.back);
console.log("---------------");

// var question2 = new completeCard.ChoiceOne("What is the longest river in the world? ", "Amazon ");
// console.log(question2.front);
// console.log(question2.back);
// console.log("---------------");
//
// var question3 = new completeCard.ChoiceOne("Are more babies born at night or during the day? ", "Night");
// console.log(question3.front);
// console.log(question3.back);
// console.log("---------------");
//
// var question4 = new completeCard.ChoiceOne("What is the world's largest active volcano?", "Muana Loa ");
// console.log(question4.front);
// console.log(question4.back);
// console.log("---------------");
//

//cloze and partial completeCard

question1 = new fullCard ("How fast can honey bee fly?", "15mph");
console.log(question1.full);
console.log(question1.cloze);
console.log(question1.partial);
console.log("---------------");

// question2 = new completeCard.ChoiceTwo("What is the longest river in the world? ", "Amazon ");
// console.log(question2.full);
// console.log(question2.cloze);
// console.log(question2.partial);
// console.log("---------------");
//
//
// question3 = new completeCard.ChoiceTwo("Are more babies born at night or during the day? ", "Night");
// console.log(question3.full);
// console.log(question3.cloze);
// console.log(question3.partial);
// console.log("---------------");
//
//
// question4 = new completeCard.ChoiceTwo("What is the world's largest active volcano?", "Muana Loa ");
// console.log(question4.full);
// console.log(question4.cloze);
// console.log(question4.partial);
// console.log("---------------");
