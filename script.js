var  start_button = document.querySelector(".start_button button");
var questions_box = document.querySelector(".questions_text");


// Start button clicked
start_button.onclick =()=>{
    questions_box.add("options_list")
}

// creating an array and passing the number, questions, options and answers
let questions = [
    {
        question: "what is JavaScript used for ?"
    }
    
];