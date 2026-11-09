let humanScore =0;
let computerScore = 0;


function getComputerChoice() {
    const computerChoice =  Math.floor(Math.random()*3) 

    if (choice === 0) {
        return ("rock");
    }
     else if (choice ===1){
        return ("paper");
    }
    else {
        return ("scissors");
    }
 }

function getHumanChoice() {
    const humanChoice = prompt("What is your choice?");
    
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice)
 {
    if (humanChoice === computerChoice)
    {
    console.log("It is a tie!!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beat Scissors");
    humanScore =humanScore + 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beat Rock");
    humanScore =humanScore + 1;
    }   

    else if (humanChoice === "scissors" && computerChoice === "paper")
     { console.log("You win! Scissors beat Paper");
    humanScore = humanScore + 1;
    }
    else {
        console.log (`YOu lose ${computerChoice} beats ${humanChoice}`);
        computerScore =computerScore +1;
    }
 }

    playRound("rock", "scissors");
    console.log(humanScore);