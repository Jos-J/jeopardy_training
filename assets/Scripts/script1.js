const startButton = document.getElementById('start_btn')
const nextButton = document.getElementById('next_btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answers-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('quiz started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerHTML = question.question
question.answers.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.innerText
button.classList.add('btn')
if (answer.correct){
    button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
})  
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}
}

function selectAnswer(e){
const selectbutton = e.target
const correct = selectbutton.dataset.correct
setStatusClass(document.body,correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button,button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
} 

}

function setStatusClass (element, correct ){
clearStatusClass(element)
if (correct){
    element.classList.add('correct')
} else {
    element.classList.add('worng')
}
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: "what is JavaScript used for ?",
        answers: [
            {text: 'Interconnectivity', correct: true},
            {text: 'All the above', correct: false},
            {text: 'Markup Language', correct: false},
            {text: 'Styling the markup language', correct: false}
       
        ]
    },
    ]
