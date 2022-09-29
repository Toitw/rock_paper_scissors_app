
//Create a function that randomly pick a number between 0-2, then we will
//assign virtually a value to each number: 0 - Rock, 1 - Paper, 2 - Scissors
//So we can compare them later with the userChoice
function getComputerChoice() {
    let computerChoice = 0;
    computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0:
            return "ROCK";
           break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
    return computerChoice;
}

//Create a function that extract the user result form each click and play a round
    const selectionButton = document.querySelector(".selectionButton");
    const rockSelection = document.querySelector("#rockSelection");
    const paperSelection = document.querySelector("#paperSelection");
    const scissorsSelection = document.querySelector("#scissorsSelection");
    rockSelection.addEventListener("click", () => {
        userChoice = rockSelection.innerHTML;
        playRound();
    });
    paperSelection.addEventListener("click", () => {
        userChoice = paperSelection.innerHTML;
        playRound();
    });
    scissorsSelection.addEventListener("click", () => {
        userChoice = scissorsSelection.innerHTML;
        playRound();
    });


//Create a function to keep a score 

let userScore = 0;
let computerScore = 0;
function scoreCounter () {
    switch (playRound) {
        case "DRAW":
            return;
            break;
        case "USER":
            return userScore + 1;
            break;
        case "COMPUTER":
            return computerScore ++;
    }
}

//Create a function that 
//play a round, comparing the results, announcing a winner and 
//returning the winner
function playRound() {

    let winner = "";
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(userChoice);
    if (computerChoice === "ROCK" && userChoice === "PAPER") {
        winner = "USER";
        console.log(`${userChoice} beats ${computerChoice}, ${winner} wins!`);
        return winner;
    } else if (computerChoice === "PAPER" && userChoice === "ROCK") {
        winner = "COMPUTER";
        console.log(`${computerChoice} beats ${userChoice}, ${winner} wins!`);
        return winner;
    } else if (computerChoice === "PAPER" && userChoice === "SCISSORS") {
        winner = "USER";
        console.log(`${userChoice} beat ${computerChoice}, ${winner} wins!`);
        return winner;
    } else if (computerChoice === "SCISSORS" && userChoice === "PAPER") {
        winner = "COMPUTER";
        console.log(`${computerChoice} beat ${userChoice}, ${winner} wins!`);
        return winner;
    } else if (computerChoice === "SCISSORS" && userChoice === "ROCK") {
        winner = "USER";
        console.log(`${userChoice} beat ${computerChoice}, ${winner} wins!`);
        return winner;
    } else if (computerChoice === "ROCK" && userChoice === "SCISSORS") {
        winner = "COMPUTER";
        console.log(`${computerChoice} beat ${userChoice}, ${winner} wins!`);
        return winner;
    } else if (computerChoice === userChoice) {
        winner = "DRAW"
        console.log(winner);
        return winner;
    }

    scoreCounter();
}


