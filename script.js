
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


//Create a function to keep and display a score 

let userScore = 0;
let computerScore = 0;

function scoreCounter () {
    switch (winner) {
        case "DRAW":
            return;
            break;
        case "USER":
            userScore++;
            break;
        case "COMPUTER":
            computerScore++;
    }
    let userScoreHTML = document.querySelector(".userScore");
    userScoreHTML.textContent = userScore;
    let computerScoreHTML = document.querySelector(".computerScore");
    computerScoreHTML.textContent = computerScore;
}
// In the end I decided to use scoreCounter with switch
// function scoreCounter2() {
//     if (winner === "DRAW") {
//         return;
//     } else if (winner === "USER") {
//         userScore++;
//     } else {
//         computerScore += 1;
//     }
// }

//Create a function to finish the game and display a message
// once anyone gets to 5 point
function endGame () {
    if (userScore === 5) {
        alert("User wins");
        playAgain();
    } else if (computerScore === 5) {
        alert("Computer wins");
        playAgain();
    } else {
        return;
    }
}

//Function to reset the game
function resetGame () {
    userScore = 0;
    computerScore = 0;
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
}

//Function to show a "Play again" button an remove the buttons to play
//After clicking it, everything is restart
function playAgain (){
const playAgainButton = document.createElement("button");
const scoreContainer = document.querySelector(".scoreContainer");
const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer");
playAgainButton.classList.add("playAgainButton");
scoreContainer.appendChild(playAgainButton);
playAgainButton.textContent = "PLAY AGAIN!";
container.removeChild(buttonContainer);
playAgainButton.addEventListener("click", () => {
    container.prepend(buttonContainer);
    scoreContainer.removeChild(playAgainButton);
})
}

//Create a function that 
//play a round, comparing the results, announcing a winner and 
//returning the winner
let winner = "";
function playRound() {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(userChoice);
    if (computerChoice === "ROCK" && userChoice === "PAPER") {
        winner = "USER";
        console.log(`${userChoice} beats ${computerChoice}, ${winner} wins!`);
    } else if (computerChoice === "PAPER" && userChoice === "ROCK") {
        winner = "COMPUTER";
        console.log(`${computerChoice} beats ${userChoice}, ${winner} wins!`);
    } else if (computerChoice === "PAPER" && userChoice === "SCISSORS") {
        winner = "USER";
        console.log(`${userChoice} beat ${computerChoice}, ${winner} wins!`);
    } else if (computerChoice === "SCISSORS" && userChoice === "PAPER") {
        winner = "COMPUTER";
        console.log(`${computerChoice} beat ${userChoice}, ${winner} wins!`);
    } else if (computerChoice === "SCISSORS" && userChoice === "ROCK") {
        winner = "USER";
        console.log(`${userChoice} beat ${computerChoice}, ${winner} wins!`);
    } else if (computerChoice === "ROCK" && userChoice === "SCISSORS") {
        winner = "COMPUTER";
        console.log(`${computerChoice} beat ${userChoice}, ${winner} wins!`);
    } else if (computerChoice === userChoice) {
        winner = "DRAW"
        console.log(winner);
    };

    scoreCounter();
    endGame();
}

//Variables to show the score


