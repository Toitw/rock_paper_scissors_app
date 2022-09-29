
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

//Create a function that extract the user result form each click and play a round,
//also reset the announceWinner to blank.
    const selectionButton = document.querySelector(".selectionButton");
    const rockSelection = document.querySelector("#rockSelection");
    const paperSelection = document.querySelector("#paperSelection");
    const scissorsSelection = document.querySelector("#scissorsSelection");
    rockSelection.addEventListener("click", () => {
        resultText.textContent = "";
        userChoice = rockSelection.innerHTML;
        playRound();
    });
    paperSelection.addEventListener("click", () => {
        //Set it blank so it don't add up
        resultText.textContent = "";
        userChoice = paperSelection.innerHTML;
        playRound();
    });
    scissorsSelection.addEventListener("click", () => {
        resultText.textContent = "";
        userChoice = scissorsSelection.innerHTML;
        playRound();
    });



//Create a function to keep and display a score and announce the winnerº

let userScore = 0;
let computerScore = 0;
const resultTextContainer = document.querySelector(".resultTextContainer");
const resultText = document.createElement("p");
resultText.classList.add("resultText");
resultTextContainer.appendChild(resultText);
function scoreCounter () {
    switch (winner) {
        case "DRAW":
            resultText.textContent = announceWinner;
            return;
            break;
        case "USER":
            resultText.textContent = announceWinner;
            userScore++;
            break;
        case "COMPUTER":
            resultText.textContent = announceWinner;
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
        alert("User wins! Humans survive for now");
        playAgain();
    } else if (computerScore === 5) {
        alert("Computer wins! Terminator was right :)");
        playAgain();
    } else {
        return;
    }

}

//Auxiliar function to reset the game
function resetGame () {
    userScore = 0;
    computerScore = 0;
    let userScoreHTML = document.querySelector(".userScore");
    userScoreHTML.textContent = 0;
    let computerScoreHTML = document.querySelector(".computerScore");
    computerScoreHTML.textContent = 0;
}

//Function to show a "Play again" button an remove the buttons to play
//After clicking it, everything is restart
function playAgain (){
resultText.textContent = "";
const playAgainButton = document.createElement("button");
const scoreContainer = document.querySelector(".scoreContainer");
const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer");
playAgainButton.classList.add("playAgainButton");
playAgainButton.textContent = "PLAY AGAIN!";
container.replaceChild(playAgainButton, buttonContainer);
playAgainButton.addEventListener("click", () => {
    container.replaceChild(buttonContainer, playAgainButton);
    resetGame();
});
}

//Create a function that 
//play a round, comparing the results, announcing a winner and 
//finishing the game with an alert, and a button to play again
let winner = "";
let announceWinner = ""
function playRound() {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(userChoice);
    if (computerChoice === "ROCK" && userChoice === "PAPER") {
        winner = "USER";
        announceWinner = (`${userChoice} beats ${computerChoice}, ${winner} wins!`);
    } else if (computerChoice === "PAPER" && userChoice === "ROCK") {
        winner = "COMPUTER";
        announceWinner = (`${computerChoice} beats ${userChoice}, ${winner} wins!`);
    } else if (computerChoice === "PAPER" && userChoice === "SCISSORS") {
        winner = "USER";
        announceWinner = (`${userChoice} beat ${computerChoice}, ${winner} wins!`);
    } else if (computerChoice === "SCISSORS" && userChoice === "PAPER") {
        winner = "COMPUTER";
        announceWinner = (`${computerChoice} beat ${userChoice}, ${winner} wins!`);
    } else if (computerChoice === "SCISSORS" && userChoice === "ROCK") {
        winner = "USER";
        announceWinner = (`${userChoice} beat ${computerChoice}, ${winner} wins!`);
    } else if (computerChoice === "ROCK" && userChoice === "SCISSORS") {
        winner = "COMPUTER";
        announceWinner = (`${computerChoice} beat ${userChoice}, ${winner} wins!`);
    } else if (computerChoice === userChoice) {
        winner = "DRAW"
        announceWinner = "It's a draw! No one wins, let's go for the next!";
    };

    scoreCounter();
    setTimeout(endGame, 5); //I used setTimeout because otherwise the alert
    //from endGame comes before scoreCounter finish to add the last point
}



