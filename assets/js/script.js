console.log("Starting quiz...");
var currentQuestionIndex = 0;
var questionTextElement = document.querySelector("#question-text");
var questionChoicesElement = document.querySelector("#questionChoices");
var resultsPElement = document.querySelector("#results");

//Buttons
var letsStartBtnElement = document.querySelector("#letsStartBtn");

//Screens
var startQuizScreenElement = document.querySelector("#startQuizScreen");
var quizQuestionsElement = document.querySelector("#quizQuestionsScreen");

//Timer
var counter = 60;
var startCountdown;
var countdown = function () {
  counter--;
  document.getElementById("countDown").textContent = counter;
  if (counter === 0) {
    console.log("blastoff");
    clearInterval(startCountdown);
  }
};

var questions = [
  {
    question: "What tag is used to define a table or image notation (caption)?",
    choices: ["<caption>", "<code>", "<!DOCTYPE>", "<embed>"],
    correctAnswer: "<caption>",
  },
  {
    question:
      "What tag is used to create a table in an HTML document and includes one - or more - of the <tr>, <th>, and <td> elements?",
    choices: ["<img>", "<table>", "<div>", "<meta>"],
    correctAnswer: "<table>",
  },
  {
    question:
      "What tag is used to specify a line of text that is no longer correct (it used to be the strike tag, but that no longer works in HTML5)?",
    choices: ["<s>", "<li>", "<ul>", "<u>"],
    correctAnswer: "<s>",
  },
  {
    question:
      "What tag is used to define – and place – an interactive button in an HTML document?",
    choices: ["<clickfield>", "<button>", "<footer>", "<td>"],
    correctAnswer: "<button>",
  },
];

//Check answers
function checkAnswer(event) {
  console.log("check answer please");
  var currentQuestion = questions[currentQuestionIndex];
  var correctAnswer = currentQuestion.correctAnswer;
  var buttonClicked = event.target;
  console.log(buttonClicked.textContent);
  console.log({ correctAnswer });
  if (correctAnswer === buttonClicked.textContent) {
    resultsPElement.textContent = "You got that right!";
    console.log("right");
  } else {
    resultsPElement.textContent = "You got that Wrong";
    console.log("wrong");
    //deduct time function
    deductTime();
  }
  console.log({ currentQuestionIndex });
  currentQuestionIndex = currentQuestionIndex + 1;
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

//Deduct time when answer wrong
function deductTime() {
  counter = counter - 10;
  //shorthand
  //counter -= 10
  //plus counter += 10
  if (counter < 0) {
    counter = 0;
  }
}

//show questions
function displayQuestion() {
  console.log("display question please");
  var currentQuestion = questions[currentQuestionIndex];
  questionTextElement.textContent = currentQuestion.question;
  var choices = currentQuestion.choices;

  questionChoicesElement.innerHTML = "";

  for (var i = 0; i < choices.length; i++) {
    var button = document.createElement("button");
    button.textContent = choices[i];
    questionChoicesElement.appendChild(button);
  }
}

var resultsScreenEl = document.querySelector("#enterHS");

// end quiz function
function endQuiz() {
  console.log("quiz ended");
  clearInterval(startCountdown);
  //  get final score
  //display/save in local storage
  //results screen
  resultsScreenEl.classList.remove("hidden");
  resultsScreenEl.style.display = "block";
}

letsStartBtnElement.addEventListener("click", function () {
  console.log("start quiz");

  startCountdown = setInterval(countdown, 1000);

  startQuizScreenElement.classList.add("hidden");

  quizQuestionsElement.classList.remove("hidden");

  displayQuestion();
});

questionChoicesElement.addEventListener("click", checkAnswer);
