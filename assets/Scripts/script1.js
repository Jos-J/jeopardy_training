const startButton = document.getElementById('start_btn')
const nextButton = document.getElementById('next_btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answers-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('quiz started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
    resetState()
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answer.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('btn')
if (answer.correct){
    button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtonElement.appendChild(button)
console.log("appendChild")

})  
}

function resetState()  {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
}
}

function selectAnswer(e){
const selectbutton = e.target
const correct = selectbutton.dataset.correct
setStatusClass(document.body,correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
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
        question: 'what is JavaScript used for?',
        answers: [
            {text: 'Interconnectivity', correct: true},
            {text: 'All the above', correct: false},
            {text: 'Markup Language', correct: false},
            {text: 'Styling the markup language', correct: false}
       
        ]
    },
    {
        question: "Name some of the JavaScript features ?",
        answer: [
            {text: 'open and cross platform', correct: false},
            {text: 'All the above', correct: true},
            {text: 'designed for creating network-centric applications', correct: false},
            {text: 'complementary to and integrated with HTML', correct: false}
        ]
    }, 
    {
        question: "Is syntax importamt in HTML, CSS, JavaScript?",
        answer: [
            {text:'true', correct: true},
            {text: 'false', correct: false},
            {text: 'none of the above', correct: false},
            {text: 'all the above', correct: false}
        ]   
    },
    {
        question: "JavaScript is the same as Java?",
        answer: [
            {text:'False',correct: true},
            {text:'none of the above', correct: false},
            {text:'all the above', correct: false},
            {text:'true', correct: false}
        ] 
    },
    {
        question: "Is JavaScript case-sensitive?",
        answer: [
            {text: 'All the above', correct: false},
            {text: 'False', correct: false},
            {text: 'true', correct: true},
            {text: 'None of the above', correct: false}
        ]
    },
    {
        question: "Where is the correct place to insert the JavaScript script?",
        answer: [
            {text: 'Body', correct: true},
            {text: 'Head', correct: false},
            {text: 'Footer', correct: false},
            {text: 'All the above', correct: false}
        ]
    },
    {
        question: "What are the advantages of using JavaScript?",
        answer: [
            {text: 'A & B', correct: true},
            {text: 'Increased interactivity', correct: false},
            {text: 'Richer interfaces', correct: false},
            {text: 'A & B', correct: false},
        ]
    },
    {
        question: "How do you create an Array in JavaScript?",
        answer: [
            {text: 'Var x = []; var y= [1, 2, 3, 4, 5];', correct: true},
            {text: 'Var x = []; var y= [1, 2, 3, 4, 5];', correct: false},
            {text: 'Var x = [] var y= [1, 2, 3, 4, 5];', correct: false},
            {text: 'Var x = []: var y= [1, 2, 3, 4, 5]:', correct: false},
        ]
    },
    {
        question: "How many types of functions does javaScript Support?",
        answer: [
            {text: 'named and annonomous;', correct: true},
            {text: 'named', correct: false},
            {text: 'named, annonomous, secert', correct: false},
            {text: 'All the aboved', correct: false},
        ]
    },
    {
        question: "what's a call back in JavaScript?",
        answer: [
            {text: 'execute code in response to an event', correct: true},
            {text: 'lyrics in a song', correct: false},
            {text: 'way to undo code previously typed', correct: false},
            {text: 'All the aboved', correct: false},
        ]
    },
    {
        question: "what are the valid scopes of a varaible in JavaScript?",
        answer: [
            {text: 'A & B"', correct: true},
            {text: 'Global', correct: false},
            {text: 'Local', correct: false},
            {text: 'International', correct: false},
        ]
    },
    {
        question: "Which built-in method returns the length of the string?",
        answer: [
            {text: 'length()', correct: true},
            {text: 'length[]', correct: false},
            {text: 'length;', correct: false},
            {text: 'length:', correct: false},
        ]
    },
    {
        question: "What are the variable naming conventions in JavaScript?",
        answer: [
            {text: 'All the above', correct: true},
            {text: 'varaible names are case sensitive', correct: false},
            {text: 'should not start with a numeral', correct: false},
            {text: 'you should not use any of the JavaScript reserved keywords ad variable names', correct: false},
        ]
    },
    {
        question: "What typeof returns for a null value?",
        answer: [
            {text: 'All the above', correct: true},
            {text: 'Error', correct: false},
            {text: 'Object"', correct: false},
            {text: 'None of the above', correct: false},
        ]
    },
    {
        question: "What are the Type of operators in Javascript",
        answer: [
            {text: 'All the above', correct: true},
            {text: 'Boolean', correct: false},
            {text: 'String', correct: false},
            {text: 'Number', correct: false},
        ]
    },
    {
        question: "Rate my quiz",
        answer: [
            {text: 'A worthy"', correct: true},
            {text: 'D worthy', correct: false},
            {text: 'B worthy', correct: false},
            {text: 'C worthy"', correct: false},
        ]
    }, 
]
    
