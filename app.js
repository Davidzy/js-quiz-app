//---CREATE QUESTIONS
var questions = [
  new Question("Who is the leader of the Horde?", ["Vol'jin", "Sylvanas Windrunner"], "Vol'jin"),
  new Question("What is the name of the NORTHERNMOST Horde capital city located on Kalimdor?", ["Orgrimmar", "Thunder Bluff"], "Orgrimmar")
];

//---CREATE QUIZ
var quiz = new Quiz(questions);

//DISPLAY QUIZ
QuizUI.displayNext();