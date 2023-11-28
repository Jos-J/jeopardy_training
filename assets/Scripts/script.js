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
    // Check if the selected answer is correct
    if (selectedAnswer === currentQuestion.choices[currentQuestion.answer]) {
        // Increment correct counter or update UI accordingly
        correctCounter++;
    } else {
        // Increment incorrect counter or update UI accordingly
        incorrectCounter++;
    }

    // Move to the next question
    loadNextQuestion();
}

function loadNextQuestion() {
    if (timerCount > 0) {
        loadQuestion();
    } else {
        quizOver();
    }
}

function quizOver() {
    questionElement.textContent = "Quiz Over!";
    clearInterval(timer);
    // Additional logic for quiz completion
}

function loseGame() {
    questionElement.textContent = 'You Lose';
    incorrectCounter++;
    // Additional logic for losing the game
}

startButton.addEventListener('click', startQuiz);

