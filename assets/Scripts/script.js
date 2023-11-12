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
    
    for ( var i = 0; i < questionArray.length; i++){
        var questionArray = questionArray[i].question;
        document.write (questionArray);
        var options = questionArray.choices;
        document.body.appendChild(document.createElement('br'));
        var name = 'selector'+i;
        for( var opt in options) {
            var radioEle = document.createElement('input');
            radioEle.type = 'selector';
            radioEle.value = options[opt];
            radioEle.name = name;
            document.body.appendChild(radioEle);
            var label = document.createElement('label')
            label.innerHTML= options[opt];
            document.body.appendChild(label);
            document.body.appendChild(document.createElement('br'));
        }
            document.body.appendChild(document.createElement('br'));
    
}

function selectAnswer(e){
}


// creating an array and passing the number, questions, options and answers
var questionArray = [
    {
        question: " What does the fox say",
        choices: ['Idk','yelp', 'no', 'yes'],
        answer: 1     
    }, 
    
    {
            question: " What does the dog say",
            choices: ['meow','roof', 'no', 'yes'],
            answer: 2           
     },
     {
            question: 'Is syntax importamt in HTML, CSS, JavaScript',
            choices: ['idk','no','yes','maybe'],
            answer: 3
     },
      {     question: "JavaScript is the same as Java?",
            choices:['no', 'yes', 'idk','whats java'],
            answer: 1
      },
      {
            question: 's JavaScript case-sensitive?',
            choices: ['no', 'yes', 'all the above', 'none of the above'],
            answer: 2
      },
      {
            question: 'Where is the correct place to insert the JavaScript script',
            choices: ['body', 'header', 'footor', 'idk'],
            answer: 3
      },
      {
            question: 'Rate my quiz',
            choices: ['A', 'B', 'C', 'D'],
            answer: 1
      }
];

// for ( var i = 0; i < questionArray.length; i++){
//     var questionArray = questionArray[i].question;
//     document.write (questionArray);
//     var options = questionArray.choices;
//     document.body.appendChild(document.createElement('br'));
//     var name = 'selector'+i;
//     for( var opt in options) {
//         var radioEle = document.createElement('input');
//         radioEle.type = 'selector';
//         radioEle.value = options[opt];
//         radioEle.name = name;
//         document.body.appendChild(radioEle);
//         var label = document.createElement('label')
//         label.innerHTML= options[opt];
//         document.body.appendChild(label);
//         document.body.appendChild(document.createElement('br'));
//     }
//         document.body.appendChild(document.createElement('br'));

// }
}