const  start_button = document.querySelector(".start_button button");
const question_text = document.querySelector(".question_text");
const options_list = document.querySelector(".options_list");
const question_box = document.querySelector(".questions_box")

// Start button clicked
start_button.onclick =()=>{
    showQuestions(".questions_box")
    console.log(showQuestions)
    question_text(".question_text")
    showQuestions();
}
let que_count = 0;




// creating an array and passing the number, questions, options and answers
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
    {
        Number: 7,
        question: "What are the advantages of using JavaScript?",
        answer: "A & B",
        options: [
            "Increased interactivity",
            "Richer interfaces",
            "A & B",
            "None the above",
        ]
    },
    {
        Number: 8,
        question: "How do you create an Array in JavaScript?",
        answer: "Var x = []; var y= [1, 2, 3, 4, 5];",
        options: [
            "Var x = [] var y= [1, 2, 3, 4, 5];",
            "Var x = []; var y= [1, 2, 3, 4, 5];",
            "Var x = []: var y= [1, 2, 3, 4, 5]:",
            "Var x = []: var y= [1, 2, 3, 4, 5];",
        ]
    },
    {
        Number: 9,
        question: "How many types of functions does javaScript Support?",
        answer: "named and annonomous;",
        options: [
            "named",
            "named and annonomous",
            "named, annonomous, secert",
            "All the aboved",
        ]
    },
    {
        Number: 10,
        question: "what's a call back in JavaScript?",
        answer: "execute code in response to an event",
        options: [
            "lyrics in a song",
            "execute code in response to an event",
            "way to undo code previously typed",
            "All the aboved",
        ]
    },
    {
        Number: 11,
        question: "what are the valid scopes of a varaible in JavaScript?",
        answer: "A & B",
        options: [
            "Global",
            "Local",
            "International",
            "All the aboved",
            "A & B"
        ]
    },
    {
        Number: 12,
        question: "Which built-in method returns the length of the string?",
        answer: "length()",
        options: [
            "length()",
            "length[]",
            "length;",
            "length:",
        ]
    },
    {
        Number: 13,
        question: "What are the variable naming conventions in JavaScript?",
        answer: "All the above",
        options: [
            "you should not use any of the JavaScript reserved keywords ad variable names",
            "should not start with a numeral",
            "varaible names are case sensitive",
            "All the above",
        ]
    },
    {
        Number: 14,
        question: "What typeof returns for a null value?",
        answer: "All the above",
        options: [
            "Error",
            "Undefined",
            "Object",
            "None of the above",
        ]
    },
    {
        Number: 15,
        question: "What are the Type of operators in Javascript",
        answer: "All the above",
        options: [
            "Number",
            "String",
            "Boolean",
            "None of the above",
            "All the above"
        ]
    },
    { Number: 16,
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
    let question_tag ="<span>" + questions[1].Number + "<span>";
    question_box.innerHTML = question_box;
}