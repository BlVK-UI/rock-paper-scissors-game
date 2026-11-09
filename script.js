let humanScore =0;
let computerScore = 0;


function getComputerChoice() {
    const computerChoice =  Math.floor(Math.random()*3) 

    if (computerChoice === 0) {
        return ("rock");
    }
     else if (computerChoice ===1){
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

   function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log(humanScore, computerScore);

  if (humanScore > computerScore) {
    console.log(`You win the game! Your score is ${humanScore} and computer score is ${computerScore}`);
  }
  else if (humanScore < computerScore) {
    console.log(`You lose the game! Your score is ${humanScore} and computer score is ${computerScore}`);
  }
  else {
    console.log(`The game is a tie! Your score is ${humanScore} and computer score is ${computerScore}`);
  }
}

playGame();