function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3) + 1;
    console.log(guess);
    return guess;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let roundWinner = "";

   
    if (computerSelection == 1) {
        if (playerChoice == "rock") {
            console.log(`Computer chose rock, you chose ${playerChoice} it's a tie!`);
        }
        else if (playerChoice == "paper") {
            roundWinner = "player";
            console.log(`Computer chose rock, you chose ${playerChoice} you win!`);
        }
        else {
            roundWinner = "computer";
            console.log(`Computer chose rock, you chose ${playerChoice} you lose!`);
        }
    }

    if (computerSelection == 2) {
        if (playerChoice == "rock") {
            roundWinner = "computer";
            console.log(`Computer chose paper, you chose ${playerChoice} you lose!`);
        }
        else if (playerChoice == "paper") {
            console.log(`Computer chose paper, you chose ${playerChoice} it's a tie!`);
        }
        else {
            roundWinner = "player";
            console.log(`Computer chose paper, you chose ${playerChoice} you win!`);
        }
    }

    if (computerSelection == 3) {
        if (playerChoice == "rock") {
            roundWinner = "player";
            console.log(`Computer chose scissors, you chose ${playerChoice} you win!`);
        }
        else if (playerChoice == "paper") {
            roundWinner = "computer";
            console.log(`Computer chose scissors, you chose ${playerChoice} you lose!`);
        }
        else {
            console.log(`Computer chose scissors, you chose ${playerChoice} it's a tie!`);
        }
    }
    console.log(roundWinner);
    return roundWinner;
}


function game() {

}

const playerSelection = prompt("Please enter rock, paper, or scissors: ");
const computerSelection = getComputerChoice();
const playerScore = 0;
const computerScore = 0;


game();