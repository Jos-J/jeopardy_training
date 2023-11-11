var correct = document.querySelector('.correct');
var incorrect = document.querySelector('.incorrect');
var timerElement = document.querySelector('.timer-count');

// var question_box = document.querySelector('questions')
var correctCounter = 0;
var incorrectCounter = 0;
var isQuizFinished = false;
var timer;
var timerCount;
// var currentQuestionIndex = 0;
const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById("questions")
const answerButtonsElement = document.getElementById('answers-buttons')
const questionContainerElement = document.getElementById('card word-guess')

let shuffleQuestions, currentQuestionIndex

var score;

startButton.addEventListener('click', startQuiz);


function loadQuestion() {
}


function startQuiz(){
console.log('Quiz Started')
shuffleQuestions = questions.sort(() => Math.random () - .5)
currentQuestionIndex = 0;
setNextQuestion()
}

function setNextQuestion(){
showQuestions(shuffleQuestions[currentQuestionIndex])
}

function showQuestions(questions){
questionElement.innerText = questions.questions
}


function selectAnswer(){

}

// The init function is called when the page loads 
function init() {
  getCorrect();
  getIncorrect();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isQuizFinished = false;
  timerCount = 600;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

function quizOver() {
  questions.textContent = "YOU WON!!!🏆 ";
  correctCounter++
  startButton.disabled = false;
  setWins()
}





// creating an array and passing the number, questions, options and answers
let questions = [
    {
        question: "",
        answer: [
            {text: '', correct: true},
            {text: '', correct: false},
            {text: '', correct: false},
            {text: '', correct: false},
        ]
    },
    {
        Number: 2,
        question: "Name some of the JavaScript features ?",
        answer: "All the Above",
        options: [
            "open and cross platform",
            "designed for creating network-centric applications",
            "complementary to and integrated with HTML",
            "All the above",
        ]
    },
    {
        Number: 3,
        question: "Is syntax importamt in HTML, CSS, JavaScript?",
        answer: "True",
        options: [
            "True",
            "False",
            "None of the above",
            "All the above",
        ]
    },
    {
        Number: 4,
        question: "JavaScript is the same as Java?",
        answer: "False",
        options: [
            "True",
            "False",
            "None of the above",
            "All the above",
        ]
    },
    {
        Number: 5,
        question: "Is JavaScript case-sensitive?",
        answer: "True",
        options: [
            "True",
            "False",
            "None of the above",
            "All the above",
        ]
    },
    {
        Number: 6,
        question: "Where is the correct place to insert the JavaScript script?",
        answer: "Body",
        options: [
            "Head",
            "Body",
            "Footer",
            "All the above",
        ]
    },
    { Number: 7,
        question: "Rate my quiz",
        answer: "A worthy",
        options: [
            "A worthy",
            "B worthy",
            "C worthy",
            "D worthy",
            "None of the Above"
        ]
    }
]

// function showQuestions(){
//     const question_box = document.querySelector(".question_box");
//     let showQuestions ="<span>" + questions[1].Number + "<span>";
//     showQuestions.innerHTML = question_box;
// }

