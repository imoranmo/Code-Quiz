var timerElement = document.querySelector(".count");
var startButton = document.querySelector(".start");
var NextButton = document.querySelector(".Next");
var question = document.querySelector(".questiontext");
var response1 = document.querySelector(".response1");
var response2 = document.querySelector(".response2");
var response3 = document.querySelector(".response3");
var response4 = document.querySelector(".response4");
var ScoreList = document.querySelector("#high");
var ScoreForm = document.querySelector("#initials");
var InitialsInput = document.querySelector("#input");
var FinalMessage = document.querySelector(".TMessage");


var RightCounter= 0;
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
var HighScores = []
var HighScoreIntial = []


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

    if (QuestionNumber < 4){
    QuestionNumber++
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
    response1.style.backgroundColor = "#dadbdb";
    response2.style.backgroundColor = "#dadbdb";
    response3.style.backgroundColor = "#dadbdb";
    response4.style.backgroundColor = "#dadbdb";
    response1.style.color  = "black"; 
    response2.style.color  = "black"; 
    response3.style.color  = "black"; 
    response4.style.color  = "black"; 
   
    response1.addEventListener("click", Answer1)
    response2.addEventListener("click", Answer2)
    response3.addEventListener("click", Answer3)
    response4.addEventListener("click", Answer4)
   }

   else if (QuestionNumber >= 4) {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".question").style.display = "none";
    document.querySelector(".Results").style.display = "flex";
    document.querySelector(".Score").textContent = "Your Score is " + RightCounter + " out of 5" ;
   }
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
    timerCount = timerCount - 10;
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
    timerCount = timerCount - 10;
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
    timerCount = timerCount - 10;
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
    response4.style.backgroundColor  = "red"; 
    response4.style.color  = "white"; 
    document.querySelector(".Answer").style.visibility = "visible"; 
    document.querySelector(".Answer").textContent = "Sorry, Wrong Answer!";
    document.querySelector(".Answer").style.color = "red";
    timerCount = timerCount - 10;
    }

}

function StartGame () {
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".question").style.display = "flex";
    timerCount = 60;
    startTimer ();
    Question1();
    NextButton.addEventListener("click", Question2); 
    ScoreForm.addEventListener("submit", function(){
    document.querySelector("#initials").style.visibility = "hidden";
    })

}

startButton.addEventListener("click", StartGame)

function ShowScore() {
    
    high.innerHTML = "";
  
    for (var i = 0; i < HighScores.length; i++) {
      var HighScore = HighScores[i];
      var HighScoreIntials = HighScoreIntial[i];
  
      var li = document.createElement("li");
      li.textContent = HighScore + " High Score of " + HighScoreIntials;
      li.setAttribute("data-index", i);
  
      ScoreList.appendChild(li);
    }
  }

function init() {

    var storedScores = JSON.parse(localStorage.getItem("HighScores"));
    var storedInitals = JSON.parse(localStorage.getItem("HighScoreIntial"));
  
    if (storedScores !== null) {
        HighScores = storedScores;
        HighScoreIntial = storedInitals
    }
  
    ShowScore();
  }
  
  function storedScores() {

    localStorage.setItem("HighScores", JSON.stringify(HighScores));
    localStorage.setItem("HighScoreIntial", JSON.stringify(HighScoreIntial));
  
  }
  
  
  ScoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var ScoreText = InitialsInput.value.trim();
    var FinalScore = RightCounter
    if (ScoreText === "") {
      return;
    }
  
    HighScores.push(ScoreText);
    HighScoreIntial.push(FinalScore);
    ScoreList.value = "";
    storedScores();
    ShowScore();
  });
  
  ScoreList.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
     
      var index = element.parentElement.getAttribute("data-index");
      HighScores.splice(index, 1);
  
      ShowScore();
      storedScores();
    }
  });
  
  init()

function winGame() {
  FinalMessage.textContent = "ALL DONE!!! ";
  clearInterval(timer);
}

function loseGame() {
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".question").style.display = "none";
  document.querySelector(".Results").style.display = "flex";
  document.querySelector(".Score").textContent = "Your Score is " + RightCounter + " out of 5" ;
  FinalMessage.textContent = "TIMES UP!";
  clearInterval(timer);
}

function startTimer() {
  
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      
      if ( RightCounter >4 && timerCount > 0) {
  
        clearInterval(timer);
        winGame();
      }
    }
  
    if (timerCount <= 0) {

      loseGame();
      clearInterval(timer);
    
    }
  }, 1000);
}
