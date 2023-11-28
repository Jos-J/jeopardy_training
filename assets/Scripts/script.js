var questionElement = document.querySelector('.question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timerElement = document.querySelector('.timer-count');
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var timer;
var timerCount = 15;
var correctCounter = 0;
var incorrectCounter = 0;
var isQuizFinished = false;
var currentQuestion;
var correctAnswers = [];
var incorrectAnswers = [];

var questionArray = [
    {
        question: "What does the fox say",
        choices: ['Idk', 'yelp', 'no', 'yes'],
        answer: 1
    },
    {
        question: "What does the dog say",
        choices: ['meow', 'roof', 'no', 'yes'],
        answer: 2
    },
    {
        question: 'Is syntax important in HTML, CSS, JavaScript',
        choices: ['idk', 'no', 'yes', 'maybe'],
        answer: 3
    },
    {
        question: "JavaScript is the same as Java?",
        choices: ['no', 'yes', 'idk', 'whats java'],
        answer: 1
    },
    {
        question: 'Is JavaScript case-sensitive?',
        choices: ['no', 'yes', 'all the above', 'none of the above'],
        answer: 2
    },
    {
        question: 'Where is the correct place to insert the JavaScript script',
        choices: ['body', 'header', 'footer', 'idk'],
        answer: 3
    },
    {
        question: 'Rate my quiz',
        choices: ['A', 'B', 'C', 'D'],
        answer: 1
    },
];

function startQuiz() {
    console.log('Quiz Started');
    isQuizFinished = false;
    timerCount = 45;
    startTimer();
    loadQuestion();
}

function startTimer() {
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
    var randomIndex = Math.floor(Math.random() * questionArray.length);
    currentQuestion = questionArray[randomIndex];
    questionElement.textContent = currentQuestion.question;

    answerButtonsElement.innerHTML = '';

    currentQuestion.choices.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(selectedAnswer) {
    var correctAnswer = currentQuestion.choices[currentQuestion.answer];

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswer) {
        // Increment correct counter
        correctCounter++;

        // Store correct answer in the array
        correctAnswers.push({ question: currentQuestion.question, answer: correctAnswer });
    } else {
        // Increment incorrect counter
        incorrectCounter++;

        // Store incorrect answer in the array
        incorrectAnswers.push({ question: currentQuestion.question, selected: selectedAnswer, correct: correctAnswer });
    }

    // Move to the next question
    loadNextQuestion();
}

function loadNextQuestion() {
    // Additional logic if needed before loading the next question

    // Check if all questions have been answered
    if (correctCounter + incorrectCounter === questionArray.length) {
        quizOver();
    } else if (!isQuizFinished && timerCount > 0) {
        loadQuestion();
    } else {
        quizOver();
    }
}

function quizOver() {
    clearInterval(timer);

    if (correctCounter > incorrectCounter) {
        questionElement.textContent = "Congratulations! You completed the quiz!";
    } else {
        questionElement.textContent = "Quiz Over. Better luck next time!";
    }

   // Display or process the correct and incorrect answers stored in the arrays
   console.log("Correct Answers:", correctAnswers);
   console.log("Incorrect Answers:", incorrectAnswers);

    //  compare correct and incorrect answers
    compareAnswers();
}

// Update the score display in the HTML
function updateScore() {
    document.getElementById('correct-count').textContent = correctCounter;
    document.getElementById('incorrect-count').textContent = incorrectCounter;
}

function compareAnswers() {
    // Display the number of correct and incorrect answers
    questionElement.textContent = `Correct Answers: ${correctCounter}, Incorrect Answers: ${incorrectCounter}`;

    // Compare the number of correct and incorrect answers
    if (correctCounter > incorrectCounter) {
        questionElement.textContent += "\nCongratulations! You're the winner!";
    } else if (correctCounter < incorrectCounter) {
        questionElement.textContent += "\nSorry, you lost. Better luck next time!";
    } else {
        questionElement.textContent += "\nIt's a tie! You have an equal number of correct and incorrect answers.";
    }
    updateScore();
}


function loseGame() {
    clearInterval(timer);
    questionElement.textContent = 'You Lose. Quiz Over.';
    // Additional logic for losing the game
    quizOver();
}

startButton.addEventListener('click', startQuiz);

