var questionElement = document.querySelector('.question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timerElement = document.querySelector('.timer-count');
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var timer;
var timerCount = 60;  // Ensure the initial timer count is 60
var correctCounter = 0;
var incorrectCounter = 0;
var isQuizFinished = false;
var currentQuestion;
var correctAnswers = [];
var incorrectAnswers = [];
var usedQuestions = [];

var originalQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript",
        choices: ['<javascript>', '<script>', '<js>', '<scripting>'],
        answer: 1
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ['*', '-', 'x', '='],
        answer: 3
    },
    {
        question: 'Is syntax important in HTML, CSS, JavaScript?',
        choices: ['idk', 'no', 'yes', 'maybe'],
        answer: 2
    },
    {
        question: "JavaScript is the same as Java?",
        choices: ['no', 'yes', 'idk', 'whats java'],
        answer: 0
    },
    {
        question: 'Is JavaScript case-sensitive?',
        choices: ['no', 'yes', 'all the above', 'none of the above'],
        answer: 1
    },
    {
        question: 'Where is the correct place to insert the JavaScript script?',
        choices: ['body', 'header', 'footer', 'idk'],
        answer: 2
    },
    {
        question: 'Rate my quiz',
        choices: ['A', 'B', 'C', 'D'],
        answer: 0
    }
];

function startQuiz() {
    console.log('Quiz Started');
    isQuizFinished = false;
    timerCount = 60;
    usedQuestions = [];  // Reset used questions to start fresh
    startTimer();
    loadQuestion();
}

function startTimer() {
    clearInterval(timer);  // Prevent multiple timers from running
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function loadQuestion() {
    if (usedQuestions.length === originalQuestions.length) { // If all questions are used
        quizOver();
        return;
    }
    
    var randomIndex = Math.floor(Math.random() * originalQuestions.length);
    
    // Avoid repeating questions
    while (usedQuestions.includes(originalQuestions[randomIndex])) {
        randomIndex = Math.floor(Math.random() * originalQuestions.length);
    }

    currentQuestion = originalQuestions[randomIndex];
    usedQuestions.push(currentQuestion);

    var correctAnswerIndex = currentQuestion.answer; // Get the correct answer index directly

    questionElement.textContent = currentQuestion.question;

    answerButtonsElement.innerHTML = '';

    currentQuestion.choices.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index, correctAnswerIndex));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex, correctAnswerIndex) {
    // Reset previous styles
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.remove('correct', 'incorrect');
    });

    if (selectedIndex === correctAnswerIndex) {
        correctCounter++;
        correctAnswers.push({ question: currentQuestion.question, answer: currentQuestion.choices[correctAnswerIndex] });
    } else {
        incorrectCounter++;
        incorrectAnswers.push({ question: currentQuestion.question, selected: currentQuestion.choices[selectedIndex], correct: currentQuestion.choices[correctAnswerIndex] });
    }

    // Highlight correct and incorrect answers
    Array.from(answerButtonsElement.children).forEach((button, index) => {
        if (index === correctAnswerIndex) button.classList.add('correct');
        if (index === selectedIndex && index !== correctAnswerIndex) button.classList.add('incorrect');
    });

    setTimeout(loadNextQuestion, 1000); // Brief delay before next question
}

function loadNextQuestion() {
    if (usedQuestions.length === originalQuestions.length) { // Check if all questions have been used
        quizOver();
    } else if (!isQuizFinished && timerCount > 0) {
        loadQuestion();
    } else {
        quizOver();
    }
}

function quizOver() {
    clearInterval(timer);
    questionElement.textContent = correctCounter > incorrectCounter 
        ? "Congratulations! You completed the quiz!" 
        : "Quiz Over. Better luck next time!";
    
    console.log("Correct Answers:", correctAnswers);
    console.log("Incorrect Answers:", incorrectAnswers);
    
    updateScore();
}

function restartQuiz() {
    correctCounter = 0;
    incorrectCounter = 0;
    clearInterval(timer);
    timerCount = 60;  // Reset to initial timer count
    usedQuestions = [];
    updateScore();
    startQuiz();
}

function updateScore() {
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const correctDisplayElement = document.getElementById('correct-display');
    const incorrectDisplayElement = document.getElementById('incorrect-display');
    const scoreTextElement = document.getElementById('score-text');

    correctCountElement.textContent = correctCounter;
    incorrectCountElement.textContent = incorrectCounter;

    correctDisplayElement.textContent = correctCounter;
    incorrectDisplayElement.textContent = incorrectCounter;

    if (correctCounter > incorrectCounter) {
        scoreTextElement.textContent = "Congratulations! You're the winner!";
    } else if (correctCounter < incorrectCounter) {
        scoreTextElement.textContent = "Sorry, you lost. Better luck next time!";
    } else {
        scoreTextElement.textContent = "It's a tie! You have an equal number of correct and incorrect answers.";
    }
}

function loseGame() {
    clearInterval(timer);
    questionElement.textContent = 'You Lose. Quiz Over.';
    quizOver();
}

startButton.addEventListener('click', startQuiz);
const mulliganButton = document.querySelector('.reset-button');
mulliganButton.addEventListener('click', restartQuiz);
