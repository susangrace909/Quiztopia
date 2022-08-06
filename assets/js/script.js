console.log("Starting quiz...");
var currentQuestionIndex = 0;
var questionTextElement = document.querySelector("#question-text");
var questionChoicesElement = document.querySelector("#questionChoices");
var resultsPElement = document.querySelector("#results");

//Buttons
var letsStartBtnElement = document.querySelector("#letsStartBtn");
var tryAgainBtnElement = document.querySelector("#tryAgainBtn");
var submitBtnElement = document.querySelector("#submitBtn");

//Screens
var startQuizScreenElement = document.querySelector("#startQuizScreen");
var quizQuestionsElement = document.querySelector("#quizQuestionsScreen");
var showHSEl = document.querySelector("#showHS");

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
  //enter name
  resultsScreenEl.classList.remove("hidden");
  resultsScreenEl.style.display = "block";
}

//capture score
submitBtnElement.addEventListener("click", function () {
  console.log("Saving score?");
  var hsName = document.querySelector("#hsName").value;
  console.log("hs name", hsName);
  var hsScore = counter;
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  var newScore = {
    score: hsScore,
    initials: hsName,
  };
  console.log(newScore);
  highScores.push(newScore);

  saveScore(highScores);
  //showing score
  resultsScreenEl.classList.add("hidden");
  resultsScreenEl.style.display = "none";
  quizQuestionsElement.classList.add("hidden");
  showHSEl.classList.remove("hidden");
  showHSEl.style.display = "block";
  showScores();
});

//save final score
var saveScore = function (highScores) {
  localStorage.setItem("score", JSON.stringify(highScores));
};

//Show final scores
var showScores = function () {
  const scores = JSON.parse(localStorage.getItem("score"));
  console.log(JSON.stringify(scores));
  //button to go back to home page
  quizQuestionsElement.addEventListener("click", function () {
    console.log("headed back to home page");
  });
  for (var i = 0; i < scores.length; i++) {
    var initial = i.initials; //pulls just the initial out
    var score = i.score; //pulls just the score out
    var li = document.createElement("li"); //creates the list item
    var list = document.getElementById("hsList"); // ordered or unordered list where you want the list to show
    li.appendChild(
      document.createTextNode(scores[i].initials + ": " + scores[i].score)
    ); //adds current initial to li
    list.appendChild(li);
    console.log(li);
  }
};

// score-> homepage function
tryAgainBtnElement.addEventListener("click", function () {
  console.log("home page");
  showHSEl.classList.add("hidden");
  showHSEl.style.display = "none";
  startQuizScreenElement.classList.remove("hidden");
  counter = 60;
  currentQuestionIndex = 0;
  document.getElementById("countDown").textContent = counter;
});

//view high scores
var VHS = document.querySelector("#VHS");
VHS.addEventListener("click", function () {
  counter = 60;
  document.getElementById("countDown").textContent = counter;
  console.log("view high score screen");
  showScores();
  startQuizScreenElement.classList.add("hidden");
  resultsScreenEl.classList.add("hidden");
  resultsScreenEl.style.display = "none";
  quizQuestionsElement.classList.add("hidden");
  showHSEl.classList.remove("hidden");
  showHSEl.style.display = "block";
});

letsStartBtnElement.addEventListener("click", function () {
  console.log("start quiz");

  startCountdown = setInterval(countdown, 1000);

  startQuizScreenElement.classList.add("hidden");

  quizQuestionsElement.classList.remove("hidden");

  displayQuestion();
});

questionChoicesElement.addEventListener("click", checkAnswer);
