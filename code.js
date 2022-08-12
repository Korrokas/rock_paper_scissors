function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3) + 1;
    return guess;
}

function getPlayerChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors: ");
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice;
    }
    else {
        console.log("Invalid choice, please choose rock, paper, or scissors: ");
        return getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    let roundWinner = "";

   
    if (computerSelection == 1) {
        if (playerSelection == "rock") {
            console.log(`Computer chose rock, you chose ${playerSelection}.`);
        }
        else if (playerSelection == "paper") {
            roundWinner = "Player";
            console.log(`Computer chose rock, you chose ${playerSelection}. ${roundWinner} wins!`);
        }
        else {
            roundWinner = "Computer";
            console.log(`Computer chose rock, you chose ${playerSelection}. ${roundWinner} wins!`);
        }
    }

    if (computerSelection == 2) {
        if (playerSelection == "rock") {
            roundWinner = "Computer";
            console.log(`Computer chose paper, you chose ${playerSelection}. ${roundWinner} wins!`);
        }
        else if (playerSelection == "paper") {
            console.log(`Computer chose paper, you chose ${playerSelection}.`);
        }
        else {
            roundWinner = "Player";
            console.log(`Computer chose paper, you chose ${playerSelection}. ${roundWinner} wins!`);
        }
    }

    if (computerSelection == 3) {
        if (playerSelection == "rock") {
            roundWinner = "Player";
            console.log(`Computer chose scissors, you chose ${playerSelection}. ${roundWinner} wins!`);
        }
        else if (playerSelection == "paper") {
            roundWinner = "Computer";
            console.log(`Computer chose scissors, you chose ${playerSelection}. ${roundWinner} wins!`);
        }
        else {
            console.log(`Computer chose scissors, you chose ${playerSelection}.`);
        }
    }

    return roundWinner;
}


function game() {
    let pScore = 0;
    let cScore = 0;

    for (i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result == "Player") {
            pScore++;
        }
        else if (result == "Computer") {
            cScore++;
        }
        else {
            console.log("This round is a tie!");
        }
        console.log(`Player Score: ${pScore} | Computer Score: ${cScore}`);
    }
    
    if (pScore > cScore) {
        console.log("Player has won best of 5!");
    }
    else if (cScore > pScore) {
        console.log("Computer has won best of 5!");
    }
    else {
        console.log("The best of 5 is a tie!");
    }
}

game();