console.log("hello")

// getComputerChoice

// a function that randomly return rock paper scissors

// rock = 0
// paper = 1
// scissors = 2

// variables const

const rock = 0;
const paper = 1;
const scissors = 2;

// random number 
// random int number between 1 and 3 

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors"
    }
}
console.log(getComputerChoice());
