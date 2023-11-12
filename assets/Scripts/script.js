var questionElement = document.querySelector('.question');
var answerButtonsElement = document.getElementById('answer-buttons')
var correct = document.querySelector('.correct');
var incorrect = document.querySelector('.incorrect');
var timerElement = document.querySelector('.timer-count');
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementsByClassName( "card word-guess")
var timer;
var timerCount;
var scoreForm
var initialsInput;
var timerCount = 80;

var correctCounter = 0;
var incorrectCounter = 0;
var isQuizFinished = false;
var timer;

var answer = document.getElementsByClassName('an-buttons')

var startButton 


 // Assuming you have only one timer element

function init() {
    getCorrect();
    getIncorrect();
  }

startButton.addEventListener('click', startQuiz, startTimer)
nextButton.addEventListener ('click', () => {
    // loadQuestion()
    // selectAnswer()
    // setNextQuestion()
})


function startQuiz(){ 
console.log('Quiz Started')
isQuizFinished = false;
answerButtonsElement
timerCount = 15;
    startTimer()
    loadQuestion() 
    selectAnswer()
    // questionContainerElement.classList.add('show')
    // setNextQuestion()
    }

//  function to finish quiz
function quizOver() {
    questionElement.textContent = "YOU WON!!!🏆 ";
    correctCounter++
    startButton.disabled = false;
    isQuizFinished = true;
    giveScore() 
  }

  function loseGame() {
    questionElement.textContent = 'You Lose';
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
    var randomIndex = Math.floor(Math.random() * questionArray.length); // Corrected random index calculation
    var currentQuestion = questionArray[randomIndex]; // Using a different variable name
    questionElement.textContent = currentQuestion.question;
    answerButtonsElement.innerText = currentQuestion.answer
    currentQuestion.answer.forEach (answer => {
        const button = document.createElement ('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if( answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        // console.log(button)
        console.log(answerButtonsElement)
    })
    
    // question.options.forEach(question, answer)
   
    // ...
}

function selectAnswer(e){
}


// creating an array and passing the number, questions, options and answers
var questionArray = [
    {
        question: " What does the fox say",
        choices: ['meow','yelp', 'no', 'yes'],
        answer: 1     
    }, 
    
    {
            question: " What does the dog say",
            choices: ['meow','yelp', 'no', 'yes'],
            answer: 2    
            
        },
        
    

    //  {
    //     Number: 3,
    //      question: " what does the cat say",
    //      answer: [
    //          {text: 'meaw', correct: true},
    //          {text: 'yelp', correct: false},
    //          {text: 'no', correct: false},
    //          {text: 'yes', correct: false},
    //      ]
    //  },
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



