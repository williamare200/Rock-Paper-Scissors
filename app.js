console.log("hello")

// getComputerChoice

// a function that randomly return rock paper scissors

// rock = 0
// paper = 1
// scissors = 2

// variables const

const rock = 0;
const paper = 1;
const sciccors = 2;

// random number 
// random int number between 1 and 3 

function getComputerChoice() {
    return  Math.floor(Math.random() * 3);
}
console.log(getComputerChoice());
