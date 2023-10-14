const startButton = document.getElementById('start_btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers-buttons')

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)

function startGame(){
    console.log(' game started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionsIndex = 0
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
questionElement.innerHTML = question.question
}

function selectAnswer(){

}

let questions = [
    {
        Number: 1,
        question: "what is JavaScript used for ?",
        answer: "Interconnectivity",
        options: [
            "All the above",
            "Interconnectivity",
            "Markup Language",
            "Styling the markup language",
        ]
    },
    ]
