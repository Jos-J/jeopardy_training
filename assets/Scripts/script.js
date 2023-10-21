var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-btn");

var correctCounter = 0;
var incorrectCounter = 0;
var isWin = false;
var timer;
var timerCount;



// creating an array and passing the number, questions, options and answers
let questions = [
    {
        question: "",
        answer: [
            {text: '', correct: true},
            {text: '', correct: false},
            {text: '', correct: false},
            {text: '', correct: false},
        ]
    },
    {
        Number: 2,
        question: "Name some of the JavaScript features ?",
        answer: "All the Above",
        options: [
            "open and cross platform",
            "designed for creating network-centric applications",
            "complementary to and integrated with HTML",
            "All the above",
        ]
    },
    {
        Number: 3,
        question: "Is syntax importamt in HTML, CSS, JavaScript?",
        answer: "True",
        options: [
            "True",
            "False",
            "None of the above",
            "All the above",
        ]
    },
    {
        Number: 4,
        question: "JavaScript is the same as Java?",
        answer: "False",
        options: [
            "True",
            "False",
            "None of the above",
            "All the above",
        ]
    },
    {
        Number: 5,
        question: "Is JavaScript case-sensitive?",
        answer: "True",
        options: [
            "True",
            "False",
            "None of the above",
            "All the above",
        ]
    },
    {
        Number: 6,
        question: "Where is the correct place to insert the JavaScript script?",
        answer: "Body",
        options: [
            "Head",
            "Body",
            "Footer",
            "All the above",
        ]
    },
    { Number: 7,
        question: "Rate my quiz",
        answer: "A worthy",
        options: [
            "A worthy",
            "B worthy",
            "C worthy",
            "D worthy",
            "None of the Above"
        ]
    }
]

function showQuestions(){
    const question_box = document.querySelector(".question_box");
    let showQuestions ="<span>" + questions[1].Number + "<span>";
    showQuestions.innerHTML = question_box;
}

