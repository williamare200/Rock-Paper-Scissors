console.log("hello")

/* // getComputerChoice */

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


/* // GetHumanChoice */

// a function that takes the user choice and returns it

// return one of the valid choice depending on what the user inputs 

// get user input a valid choice
// return a choice :rock paper scissors

function GetHumanChoice() {
    let HumanChoice = prompt("escriba una de las opciones 'rock', 'paper', 'scissors'", "");
    if (HumanChoice === "rock") {
        return "rock";
    } else if (HumanChoice === "paper") {
        return "paper";
    } else {
        return "scissors"
    }
}
console.log(GetHumanChoice());

/* // The players score variables */

let humanScore = 0;
let computerScore = 0;


// logic to play a single round 

// function called playRoud 

// takes human and computer choice as arguments,
// plays a single round(analize choices)
// increments the round winner's score
// logs a winner announcement