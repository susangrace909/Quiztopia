console.log("Starting quiz...");
var currentQuestionIndex = 0;
var questions = [
  {question: "first question in the quiz", 
  choices: [
    'first choice',
    'second choice',
    'third choice',
    'fourth choice',
  ]
  answer: "first question",
}
  {question: "seconmd question in the quiz",
  choices: [
    'first choice',
    'second choice',
    'third choice',
    'fourth choice',
  ], 
  answer: "first question",
}
  {question: "third question in the quiz",
  choices: [
    'first choice',
    'second choice',
    'third choice',
    'fourth choice',
  ]
  answer: "first question",
} 
  {question: "fourth question in the quiz",
  choices: [
    'first choice',
    'second choice',
    'third choice',
    'fourth choice',
  ]
  answer: "first question",
};
]
function checkAnswer (event) {
  console.log("check answer please");
  var currentQuestion = questions[currentQuestionIndex];
  var correctAnswer = currentQuestion.answer;
  var buttonClicked = event.target;
  if (correctAnswer === buttonClicked.textContent) {
    resultsPElement.textContent = "You got that right!";
  }
    else { resultsPElement.textContent = "You got that Wrong";
    }
  }

currentQuestionIndex = currentQuestionIndex + 1 ;
}

function displayQuestion() {
  console.log("display question please");
  var currentQuestion = questions[currentQuestionIndex];
  questionTextElement.textContent = currentQuestion.question;
  var choices = currentQuestion.choices;

  questionChoicesElement.innerHTML = "";

  for (var i = 0; i < choices.length; i ++){
    var button = document.createElement("button");
    button.textContent = choices[i];
    questionChoicesElement.appendChild(button);
  }
}

function startQuiz () {
  console.log("start quiz")
}

var questionTextElement = document.querySelector("#questionsText");
var questionChoicesElement = document.querySelector("#questionChoices")




//Buttons
var letsStartBtnElement = document.querySelector("#letsStartBtn");

//Screens
var startQuizScreenElement = document.querySelector("#startQuizScreen");
var quizQuestionsElement = document.querySelector("#quizQuestionsScreen");

funtion displayQuestion() {
  console.log("display question please")
}



letsStartBtnElement.addEventListener("click", function () {
  console.log("start quiz");

  startQuizScreenElement.classList.add("hidden");

  quizQuestionsElement.classList.remove("hidden");
});
