var timerElement = document.querySelector(".count");
var startButton = document.querySelector(".start");
var NextButton = document.querySelector(".Next");
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
var CorrectResponse = ["<script>", "if (i != 5)", "if (i == 5)", "for (i = 0; i <= 5; i++)", "onclick" ]
var QuestionNumber = 0;


function Question1() {
 question.textContent = questions[QuestionNumber]
 response1.textContent = options1[QuestionNumber]
 response2.textContent = options2[QuestionNumber]
 response3.textContent = options3[QuestionNumber]
 response4.textContent = options4[QuestionNumber]

 response1.addEventListener("click", Answer1)
 response2.addEventListener("click", Answer2)
 response3.addEventListener("click", Answer3)
 response4.addEventListener("click", Answer4)
}

function Question2() {
    QuestionNumber++;
    question.textContent = questions[QuestionNumber]
    response1.textContent = options1[QuestionNumber]
    response2.textContent = options2[QuestionNumber]
    response3.textContent = options3[QuestionNumber]
    response4.textContent = options4[QuestionNumber]
    response1.disabled = false;
    response2.disabled = false;
    response3.disabled = false;
    response4.disabled = false;
    document.querySelector(".Next").style.visibility = "hidden"; 
    document.querySelector(".Answer").style.visibility = "hidden";
    response1.querySelector(".option").style.color = "#dadbdb";
   
    response1.addEventListener("click", Answer1)
    response2.addEventListener("click", Answer2)
    response3.addEventListener("click", Answer3)
    response4.addEventListener("click", Answer4)
   }
   

function Answer1() {

    FinalAnswer = options1[QuestionNumber];
    response1.disabled = true;
    response2.disabled = true;
    response3.disabled = true;
    response4.disabled = true;
    document.querySelector(".Next").style.visibility = "visible"; 
    document.querySelector(".Answer").style.visibility = "visible";
    
    if ( FinalAnswer === CorrectResponse [QuestionNumber]) {
    RightCounter++;
    response1.style.backgroundColor  = "green"; 
    response1.style.color  = "white"; 
    document.querySelector(".Answer").textContent = "Good Job, Correct Answer!";
    document.querySelector(".Answer").style.color = "green";
    }
    else {
    response1.style.backgroundColor  = "red"; 
    response1.style.color  = "white"; 
    document.querySelector(".Answer").textContent = "Sorry, Wrong Answer!";
    document.querySelector(".Answer").style.color = "red";
    }

}

function Answer2() {

    FinalAnswer = options2[QuestionNumber];
    response1.disabled = true;
    response2.disabled = true;
    response3.disabled = true;
    response4.disabled = true;
    document.querySelector(".Next").style.visibility = "visible"; 

    if (FinalAnswer === CorrectResponse [QuestionNumber]) {
    RightCounter++;
    response2.style.backgroundColor  = "green"; 
    response2.style.color  = "white"; 
    document.querySelector(".Answer").style.visibility = "visible"; 
    document.querySelector(".Answer").textContent = "Good Job, Correct Answer!";
    document.querySelector(".Answer").style.color = "green";
}
    else {
    response2.style.backgroundColor  = "red"; 
    response2.style.color  = "white"; 
    document.querySelector(".Answer").style.visibility = "visible"; 
    document.querySelector(".Answer").textContent = "Sorry, Wrong Answer!";
    document.querySelector(".Answer").style.color = "red";
    }

}

function Answer3() {

    FinalAnswer = options3[QuestionNumber];
    response1.disabled = true;
    response2.disabled = true;
    response3.disabled = true;
    response4.disabled = true;
    document.querySelector(".Next").style.visibility = "visible"; 

    if (FinalAnswer === CorrectResponse [QuestionNumber]) {
    RightCounter++;
    response3.style.backgroundColor  = "green"; 
    response3.style.color  = "white"; 
    document.querySelector(".Answer").style.visibility = "visible"; 
    document.querySelector(".Answer").textContent = "Good Job, Correct Answer!";
    document.querySelector(".Answer").style.color = "green";
}
    else {
    response3.style.backgroundColor  = "red"; 
    response3.style.color  = "white"; 
    document.querySelector(".Answer").style.visibility = "visible"; 
    document.querySelector(".Answer").textContent = "Sorry, Wrong Answer!";
    document.querySelector(".Answer").style.color = "red";
    }

}

function Answer4() {

    FinalAnswer = options4[QuestionNumber];
    response1.disabled = true;
    response2.disabled = true;
    response3.disabled = true;
    response4.disabled = true;
    document.querySelector(".Next").style.visibility = "visible"; 

    if (FinalAnswer === CorrectResponse [QuestionNumber]) {
    RightCounter++;
    response4.style.backgroundColor  = "green"; 
    response4.style.color  = "white"; 
    document.querySelector(".Answer").style.visibility = "visible"; 
    document.querySelector(".Answer").textContent = "Good Job, Correct Answer!";
    document.querySelector(".Answer").style.color = "green";
}
    else {
    response1.style.backgroundColor  = "red"; 
    response1.style.color  = "white"; 
    document.querySelector(".Answer").style.visibility = "visible"; 
    document.querySelector(".Answer").textContent = "Sorry, Wrong Answer!";
    document.querySelector(".Answer").style.color = "red";
    }

}

function StartGame () {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".question").style.display = "flex";
    Question1();
    NextButton.addEventListener("click", Question2); }



startButton.addEventListener("click", StartGame)