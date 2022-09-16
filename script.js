let ComputerChoice = 0;
//Create a function that randomly pick a number between 0-2, then we will
//assign virtually a value to each number: 0 - Rock, 1 - Paper, 2 - Scissors
//So we can compare them later with the userChoice
function getComputerChoice() {
    ComputerChoice = Math.floor(Math.random()*3);
    return ComputerChoice;
}



