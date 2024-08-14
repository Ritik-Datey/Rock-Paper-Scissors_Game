let userCount = 0;
let computerCount = 0;


let userChoice = document.querySelectorAll(".choice");


userChoice.forEach((choice)=>{
    choice.addEventListener("click", () => {
        let userAction = choice.getAttribute("id");
        //start game now
        playGame(userAction);  
    })
})


