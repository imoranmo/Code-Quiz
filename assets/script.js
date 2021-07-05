var timerElement = document.querySelector(".count");
var startButton = document.querySelector(".start");
var question = document.querySelector(".questiontext");
var response1 = document.querySelector(".response1");
var response2 = document.querySelector(".response2");
var response3 = document.querySelector(".response3");
var response4 = document.querySelector(".response4");


var RightCounter= 0;
var WrongCounter= 0;
var timer;
var timerCount;
var IsCorrect= false;
var questions = ["Inside which HTML element do we put the JavaScript?", "How to write an IF statement for executing some code if i is NOT equal to 5?", "How to write an IF statement in JavaScript?", "How does a FOR loop start?", "Which event occurs when the user clicks on an HTML element?" ]
var options1 = ["<script>", "if (i <> 5)", "if (i == 5)", "for (i = 0; i <= 5; i++)", "onmouseover" ]
var options2 = ["<scripting>", "if (i != 5)", "if i = 5", "for (i <= 5; i++)", "onchange"]
var options3 = ["<javascript>", "if i =! 5 then", "if i = 5 then", "for (i = 0; i <= 5)", "onmouseclick" ]
var options4 = ["<js>", "if i <> 5", "if i == 5 then", "for i = 1 to 5", "onclick" ]


function Question1() {
 question.textContent = questions[0]
 response1.textContent = options1[0]
 response2.textContent = options2[0]
 response3.textContent = options3[0]
 response4.textContent = options4[0]
}

function Question2() {
    question.textContent = questions[1]
    response1.textContent = options1[1]
    response2.textContent = options2[1]
    response3.textContent = options3[1]
    response4.textContent = options4[1]
}

function Question3() {
    question.textContent = questions[2]
    response1.textContent = options1[2]
    response2.textContent = options2[2]
    response3.textContent = options3[2]
    response4.textContent = options4[2]
}

function Question4() {
    question.textContent = questions[3]
    response1.textContent = options1[3]
    response2.textContent = options2[3]
    response3.textContent = options3[3]
    response4.textContent = options4[3]
}

function Answer1(){
     question = questions[0]

}

function StartGame () {
    document.querySelector(".intro").style.display = "none"
    document.querySelector(".question").style.display = "flex"
    Question1 ()
}

startButton.addEventListener("click", StartGame)
