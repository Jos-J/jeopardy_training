const startButton = document.getElementById('start_btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame(){
    console.log(' game started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

function setNextQuestion(){

}

function selectAnswer(){

}