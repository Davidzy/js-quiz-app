# js-quiz-app
A Treehouse project, using JavaScript to create an interactive quiz application with constructors and prototypes.

In this project, we were tasked with creating a basic two-question quiz, pulling together everything so far in the Object-Oriented Programming badge curriculum. I started by creating the constructors and prototypes for the ```Question``` and ```Quiz``` objects, then added the ```QuizUI``` object literal to tie together the UI with HTML population and handle guesses.

*Question/Quiz Prototypes*:

**Question.isCorrectAnswer**: Returns boolean based on match between selected answer and correct answer given in ```app.js```.<br>
**Quiz.guess**: Calls ```isCorrectAnswer``` to check selected answer, and increments ```currentQuestionIndex``` and ```score``` (only if answer is correct).<br>
**Quiz.getCurrentQuestion**: Returns the current question's index.
**Quiz.hasEnded**: Self-explanatory, returns boolean.

*QuizUI Methods*:

**QuizUI.displayNext**: Checks if quiz ```hasEnded``` to ```displayScore```, else continues to next question display.<br>
**QuizUI.displayQuestion**: Populates the appropriately indexed ```question``` id with the current question.<br>
**QuizUI.displayChoices**: Populates corresponding buttons with answer choices provided in ```app.js```.<br>
**QuizUI.displayScore**: Special text shown at end of quiz, including the player's ```Quiz.score```.<br>
**QuizUI.populateIdWithHTML**: Generic method to target a specific ID and populate its ```innerHTML```.<br>
**QuizUI.guessHandler**: Sets ```onclick``` trigger for selected answer for ```Quiz.guess```.<br>
**QuizUI.displayProgress**: Populates ```progress``` ID with "Question ```x``` of ```y```" text based on current question.

*Provided files*: style.css, index.html<br>
*Project duration*: About 3 hours

As always, please feel free to create a pull request if you have suggestions on cleaner or more efficient code! :)
