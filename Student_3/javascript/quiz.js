const start = document.querySelector(".start-screen");
const startBtn = document.getElementById("start-button");
const timeLeft = document.querySelector(".time-left");
const quizContainer = document.getElementById("container");
const questionNumber = document.querySelector(".question-number");
const displayQuiz = document.getElementById("display-container");
const nextBtn = document.getElementById("next-button");
const displayScore = document.querySelector(".score-container");
const userScore = document.getElementById("user-score");
const wrongAns = document.getElementById("wrong-ans");
const skippedQs = document.getElementById("skipped");
const totalQs = document.getElementById("questions");
const userGrade = document.getElementById("grade");
const timeTaken = document.getElementById("time-taken");
const restart = document.getElementById("restart");
const quit = document.getElementById("quit");


let questionCount;
let scoreCount = 0;
//time count for each question
let count = 16;
let countdown;
//number of wrong answers
let wrongAnswers = 0;

//time taken to complete the quiz
let totalTimeTaken = 0;
let totalTimeLeft = 0;

//sum of wrong answers and user's score
let total = 0;
//number of questions user did not answer
let skipped = 0;  


//display questions when start quiz button clicked 
startBtn.addEventListener("click", () => {
    start.classList.add("hide");
    displayQuiz.classList.remove("hide");
    startQuiz();
});

//shows start screen if the page is reloaded
window.onload = () => {
    start.classList.remove("hide");
    displayQuiz.classList.add("hide");    
};


//add an eventlistner to restart the quiz
restart.addEventListener("click", ()=> {
    startQuiz();
   
    displayQuiz.classList.remove("hide");
    displayScore.classList.add("hide");
});

//add an event listner to quit from the quiz
quit.addEventListener("click", () => {
    start.classList.remove("hide");
    displayQuiz.classList.add("hide");  
    displayScore.classList.add("hide");
})


//add an eventlistner to the next button
nextBtn.addEventListener("click", (displayNext = ()=> {
    questionCount += 1;

    //if questions are over show results
    if(questionCount == questions.length){
        
        displayQuiz.classList.add("hide");
        displayScore.classList.remove("hide");       
        
        totalQs.innerHTML = "Questions: " + questions.length;
        wrongAns.innerHTML = "Wrong answers: " + wrongAnswers;      
        userScore.innerHTML = "Your Score: " + scoreCount;
 
        total =  wrongAnswers + scoreCount;  
        //console.log(total);
        //console.log(skipped);      
        skipped = questions.length - (total);

        
        skippedQs.innerHTML = "Skipped questions: " + skipped ;
        

        timeTaken.innerHTML = "You took " + totalTimeTaken + " seconds to complete the quiz";
        checkGrade();
                       
    }
    else{
        questionNumber.innerHTML = (questionCount + 1) + " of " + questions.length + " Questions ";

        quizDisplay(questionCount);
        count = 16;
        clearInterval(countdown)
        timeDisplay();
    }
    
}));


const timeDisplay = () => {
    countdown = setInterval(() => {
        count--;

        timeLeft.innerHTML = `${count} s`;
        if(count == 0){
            clearInterval(countdown)
            displayNext();            
        }      

    }, 1000);
    
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });

    quizCards[questionCount].classList.remove("hide");
};

function quizCreater(){
    //display questions randomly
    questions.sort(() => Math.random() - 0.5);

    for(let i of questions){

        //display options randomly
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        questionNumber.innerHTML = 1 + " of " + questions.length + " Questions ";
        
        let question_div = document.createElement("p")
        question_div.classList.add("question");
        question_div.innerHTML = i.question;
        div.appendChild(question_div);

        div.innerHTML += `
        <button class = "option-div" onclick = "checker(this)"> ${i.options[0]} </button>
        <button class = "option-div" onclick = "checker(this)"> ${i.options[1]} </button>
        <button class = "option-div" onclick = "checker(this)"> ${i.options[2]} </button>
        <button class = "option-div" onclick = "checker(this)"> ${i.options[3]} </button>
        `;

        quizContainer.appendChild(div);
    }    
};


//checks if the answer is correct or wrong
function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution === questions[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        wrongAnswers++;
        //console.log(wrongAnswers);
        userOption.classList.add("incorrect");
        
        options.forEach(element => {
            if(element.innerText == questions[questionCount].correct){
                element.classList.add("correct");
            }
        });   
    }

    //calculate total time taken to complete the quiz    
    totalTimeLeft = totalTimeLeft + count;    
    totalTimeTaken = (15 * questions.length) - totalTimeLeft;

    clearInterval(countdown);
    options.forEach(element => {
        element.disabled = true;
    });
}

//check user's score and prints a proper message
function checkGrade(){

    if(scoreCount >= 8){
        userGrade.innerHTML = "Excellent work. Keep it up";    
        userGrade.style.color = "green";         
    }
    else if(scoreCount >= 5) {
        userGrade.innerHTML = "Good attempt";
        userGrade.style.color = "yellow";
    }
    else{
        userGrade.innerHTML = "Average score";
        userGrade.style.color = "red";
    }
}


function startQuiz(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 16;
    wrongAnswers = 0;
    totalTimeLeft = 0; 
    totalTimeTaken = 0;
    total = 0;
    skipped = 0;

    clearInterval(countdown);
    timeDisplay();
    quizCreater();
    quizDisplay(questionCount);
}


