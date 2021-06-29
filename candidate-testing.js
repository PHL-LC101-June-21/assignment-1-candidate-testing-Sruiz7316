const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ["\n1. Who was the first American woman in space?\n", "\n2. True or false: 5 kilometer == 5000 meters?\n", 
"\n3. (5 + 3)/2 * 10 = ?\n", 
"\n4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\n", 
"\n5. What is the minimum crew size for the ISS?\n" ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Please enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++ ) {
  candidateAnswers.push(input.question(questions[i]));
};
//console.log(candidateAnswers)
}

function gradeQuiz(candidateAnswers) {
  let percentage = 0;
  //The following console log will display candidate's answers//
  //console.log("\ncandidateAnswers: ", candidateAnswers, "\n")

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < correctAnswers.length; i++) {
if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()) {
console.log("Correct");
percentage+=20;
} else {
console.log("Incorrect");
}
};

console.log(`Your score is ${percentage}%`);

if (percentage >= 80) {
  console.log(`STATUS: PASSED`);
} else {
  console.log(`STATUS: FAILED`);
};


  let grade;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Hello ' + candidateName + '!');
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
}