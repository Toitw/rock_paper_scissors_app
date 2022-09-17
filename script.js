
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

//Create a function that pop up a prompt asking for the choice. Once the user writes it down,
//it converts it to upper cases and check if the spelling is right. If is not right, it send 
//you a message warning you (still pending to start from the beginning changing the message)
//if the spelling is right, it returns the user choice in capital letters
function getUserChoice() {
    let wrongUserChoiceMessage = "Please, check your spelling";
    let userChoice = prompt("Write down your choice", "Rock, Paper or Scissors");
    userChoice = userChoice.toUpperCase();
    if (userChoice === "ROCK" || userChoice === "PAPER" || userChoice === "SCISSORS") {
        return userChoice;
    } else {
        return wrongUserChoiceMessage;  
    }
}

//Create a function that takes computerChoice and userChoice as parameters
//and play a round, comparing the results, announcing a winner and 
//returning the winner
function playRound() {

    let winner = "";
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    if (computerChoice === "ROCK" && userChoice === "PAPER") {
        winner = "COMPUTER";
        console.log("Rock beats Paper, ${winner} wins!");
        return winner;
    }
    console.log("probando");
}