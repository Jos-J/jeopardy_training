const startButton = document.getElementById('start_btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame (){
console.log('quiz started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random () - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct  
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function selectAnswer( e ) {

}

const questions = [
    {
        question: 'what is 5 + 5?',
        answers:[
            {text: '10', correct: true},
            {text: '55', correct: false}
        ]
    }
]