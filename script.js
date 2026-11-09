let humanScore =0;
let computerScore = 0;


function getComputerChoice() {
    const choice =  Math.floor(Math.random()*3) 

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
    const choice2 = prompt("What is your choice?");
    
    return choice2.toLowerCase();
}

