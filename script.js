let userscore = 0;
let compscore =0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#you");
const compscorepara = document.querySelector("#comp");


const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin,compchoice,userchoice) => {
    if(userWin)
     {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you Win,  your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
     }
     else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lost, ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
     }
}

const playGame =(userchoice) =>{
     let compchoice=gencompchoice();
    

    if(userchoice === compchoice)
    {
        msg.innerText = `match was draw ! Play again`;
        msg.style.backgroundColor="orange";
    }
    else{
        let userWin = true;
        if(userchoice === "paper")
        {
            userWin = compchoice==="rock"?true:false;
        }
        else if(userchoice === "rock") {

            userWin = compchoice === "scissors"?true:false;
        
        }
        else {
            userWin = compchoice === "paper"?true:false;
        }
        showWinner(userWin,compchoice,userchoice);
    }
    
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})