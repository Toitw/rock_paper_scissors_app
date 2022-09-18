
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
    let wrongUserChoiceMessage = "Please, check your spelling and try again";
    let userChoice = prompt("Write down your choice", "Rock, Paper or Scissors");
    userChoice = userChoice.toUpperCase();
    if (userChoice === "ROCK" || userChoice === "PAPER" || userChoice === "SCISSORS") {
        return userChoice;
    } else {
        alert(wrongUserChoiceMessage);
        return getUserChoice();  
    }
}

//Create a function that 
//play a round, comparing the results, announcing a winner and 
//returning the winner
function playRound() {

    let winner = "";
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let userChoice = getUserChoice();
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
        return winner;
    }
}

//Create a function that repeat the round several times until one of the players get to 5. 
//Create a variable to count each victory and display the winner

function game() {
    userCount = 0;
    computerCount = 0;

    for (let i=0; i < 5; i++) {
        winner = playRound();
        if(winner === "USER") {
            userCount += 1;
            console.log(`User: ${userCount} - Computer: ${computerCount}`);
        } else if (winner === "COMPUTER") {
            computerCount += 1;
            console.log(`User: ${userCount} - Computer: ${computerCount}`);
        } else {
            i--
            console.log("It's a draw!")
        }
    }
    return `Final result is: User: ${userCount} - Computer: ${computerCount}`;
}
