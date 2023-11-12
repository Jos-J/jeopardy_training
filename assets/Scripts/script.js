var questionElement = document.querySelector('.question');
var answerButtonsElement = document.getElementById('answer-buttons')
var correct = document.querySelector('.correct');
var incorrect = document.querySelector('.incorrect');
var timerElement = document.querySelector('.timer-count');
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var timer;
var timerCount;
var scoreForm
var initialsInput;
var timerCount = 80;

var correctCounter = 0;
var incorrectCounter = 0;
var isQuizFinished = false;
var timer;

var answer = document.getElementById('answer')

var startButton 


 // Assuming you have only one timer element

// function init() {
//     getCorrect();
//     getIncorrect();
//   }

startButton.addEventListener('click', startQuiz, startTimer)
nextButton.addEventListener ('click', () => {
    loadQuestion()
    selectAnswer()
    // setNextQuestion()
})


function startQuiz(){ 
console.log('Quiz Started')
isQuizFinished = false;
currentQuestionIndex = 0
timerCount = 1000;

    startTimer()
    loadQuestion() 
    }

//  function to finish quiz
function quizOver() {
    questions.textContent = "YOU WON!!!🏆 ";
    correctCounter++
    startButton.disabled = false;
    isQuizFinished = true;
    giveScore() 
  }

  function loseGame() {
    questions.textContent = 'You Lose';
    incorrectCounter++
    startButton.disabled = false;

  }


//  function for timer to start and stop when move to next questions and when you get correct question
function startTimer () {
    //  timer start
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if(timerCount >= 0) {
            // test if win condition is met
            if( isQuizFinished && timerCount > 0 ) {
                // clears interval adn stops timer
                clearInterval(timer);
                quizOver();
            }
        }
        // if timer runs out
        if(timerCount === 0 ){
            // Clears interval
            clearInterval(timer)
            loseGame();
        }

    }, 1000);
}

function loadQuestion() {
    var randomIndex = Math.floor(Math.random() * question.length); // Corrected random index calculation
    var currentQuestion = question[randomIndex]; // Using a different variable name
    questionElement.textContent = question.currentQuestion;
    answerButtonsElement.innerHTML = 'btn-grid'
    currentQuestion.answer.forEach (answer => {
        const button = document.createElement ('button')
        button.innerText = answer.text
        button.classList.add('btn')
        // if( answer.correct){
        //     button.dataset.correct = answer.correct
        // }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    
    // question.options.forEach(question, answer)
   
    // ...
}

function selectAnswer(e){

}

// creating an array and passing the number, questions, options and answers
var question = [
    {
       Number: 1,
        question: " what does the fox say",
        answer: [
            {text: 'meow', correct: true},
            {text: 'yelp', correct: false},
            {text: 'no', correct: false},
            {text: 'yes', correct: false},
        ]
    },

    {
        Number: 2,
         question: " what does the dog say",
         answer: [
             {text: 'bark', correct: true},
             {text: 'yelp', correct: false},
             {text: 'no', correct: false},
             {text: 'yes', correct: false},
         ]
     },

     {
        Number: 3,
         question: " what does the cat say",
         answer: [
             {text: 'meaw', correct: true},
             {text: 'yelp', correct: false},
             {text: 'no', correct: false},
             {text: 'yes', correct: false},
         ]
     },
    // {
    //     Number: 2,
    //     question: "Name some of the JavaScript features ?",
    //     answer: "All the Above",
    //     options: [
    //         "open and cross platform",
    //         "designed for creating network-centric applications",
    //         "complementary to and integrated with HTML",
    //         "All the above",
    //     ]
    // },
    // {
    //     Number: 3,
    //     question: "Is syntax importamt in HTML, CSS, JavaScript?",
    //     answer: "True",
    //     options: [
    //         "True",
    //         "False",
    //         "None of the above",
    //         "All the above",
    //     ]
    // },
    // {
    //     Number: 4,
    //     question: "JavaScript is the same as Java?",
    //     answer: "False",
    //     options: [
    //         "True",
    //         "False",
    //         "None of the above",
    //         "All the above",
    //     ]
    // },
    // {
    //     Number: 5,
    //     question: "Is JavaScript case-sensitive?",
    //     answer: "True",
    //     options: [
    //         "True",
    //         "False",
    //         "None of the above",
    //         "All the above",
    //     ]
    // },
    // {
    //     Number: 6,
    //     question: "Where is the correct place to insert the JavaScript script?",
    //     answer: "Body",
    //     options: [
    //         "Head",
    //         "Body",
    //         "Footer",
    //         "All the above",
    //     ]
    // },
    // { Number: 7,
    //     question: "Rate my quiz",
    //     answer: "A worthy",
    //     options: [
    //         "A worthy",
    //         "B worthy",
    //         "C worthy",
    //         "D worthy",
    //         "None of the Above"
    //     ]
    // }
]

// function showQuestions(){
//     const question_box = document.querySelector(".question_box");
//     let showQuestions ="<span>" + questions[1].Number + "<span>";
//     showQuestions.innerHTML = question_box;
// }

