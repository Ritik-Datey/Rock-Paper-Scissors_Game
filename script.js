let userCount = 0;
let computerCount = 0;


let userChoice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");



let generateCompValue = () => {
    const val = [rock, paper, scissors];
    const randomidx = Math.floor(Math.random() * 3);
    return val[randomidx];
} 

const draw = () => {
    msg.innerText = "It Was draw";
    msg.style.backgroundColor = "rgb(16, 46, 110)";
}

let playGame = (userValue) => {
    console.log("User Value : " , userValue);
    //computer value
    let compValue = generateCompValue().id;
    console.log("Computer Value :", compValue);

    //conditions
    if(userValue === compValue){
        draw();   
    }
    else{
       if(userValue === "rock" && compValue === "paper"){
            msg.innerText = "You Lost. Rock loses to paper";
            msg.style.backgroundColor = "red";
            computerCount++;
       }
       else if(userValue === "rock" && compValue === "scissors"){
            msg.innerText = "You Won! Rock beats scissors";
            msg.style.backgroundColor = "rgb(16, 165, 41)";
            userCount++;
       }
       else if(userValue === "paper" && compValue === "rock"){
            msg.innerText = "You Won! Paper beats rock";
            msg.style.backgroundColor = "rgb(16, 165, 41)";
            userCount++;
       }
       else if(userValue === "paper" && compValue === "scissors"){
            msg.innerText = "You Lost. Paper loses to scissors";
            msg.style.backgroundColor = "red";
            computerCount++;
       }
       else if(userValue === "scissors" && compValue === "rock"){
            msg.innerText = "You Lost. Scissors loses to rock";
            msg.style.backgroundColor = "red";
            computerCount++;
       }
       else if(userValue === "scissors" && compValue === "paper"){
            msg.innerText = "You Won! Scissors beat paper";
            msg.style.backgroundColor = "rgb(16, 165, 41)";
            userCount++;
       }   
    }
    userScore.innerText = `${userCount}`;
    compScore.innerText = `${computerCount}`;
}

userChoice.forEach((choice)=>{
    choice.addEventListener("click", () => {
        let userAction = choice.getAttribute("id");
        //start game now
        playGame(userAction);  
    })
})


