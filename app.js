console.log("Rock, Paper, Scissors")

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
let computerChoiceString = "";

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    // console.log(computerChoice); // print random number
    if (computerChoice === 0) {
        computerChoiceString = "rock"
        return "rock";
    } else if (computerChoice === 1) {
        computerChoiceString = "paper"
        return "paper";
    } else {
        computerChoiceString = "scissors"
        return "scissors"
    }
}
// console.log(getComputerChoice());


/* // GetHumanChoice */

// a function that takes the user choice and returns it
// return one of the valid choice depending on what the user inputs 
// get user input a valid choice
// return a choice :rock paper scissors

function GetHumanChoice() {
    let humanChoicePrompt = prompt("escriba una de las opciones 'rock', 'paper', 'scissors'", "");
    if (humanChoicePrompt.toLowerCase() === "rock") {
        return "rock";
    } else if (humanChoicePrompt.toLowerCase() === "paper") {
        return "paper";
    } else if (humanChoicePrompt.toLowerCase() === "scissors") {
        return "scissors"
    }
}
// console.log(GetHumanChoice());



// logic to play a single round 

/* // function called playRoud  */

// takes human and computer choice as arguments,
// plays a single round(analize choices)
// increments the round winner's score
// logs a winner announcement

// rock = rock = draw
// rock < paper = lose
// rock > scissors = win 

// paper = paper = draw 
// paper < scissors = lose
// paper > rock = win 

// scissors = scissors = draw
// scissors < rock =  lose
// scissors > paper = win 


function playRound(humanChoice, computerChoiceString) {
    const draw = "it's a draw"
    const win = "you win " + humanChoice + " beats " + computerChoiceString;
    const lose = "you lose " + computerChoiceString + " beats " + humanChoice;

    if (humanChoice === computerChoiceString) {
        console.log(humanChoice);
        console.log(computerChoiceString);
        console.log(draw);
    } else if (humanChoice === "rock" && computerChoiceString === "paper") {
        console.log(humanChoice);
        console.log(computerChoiceString);
        computerScore++;
         console.log(lose);
    } else if (humanChoice === "rock" && computerChoiceString === "scissors") {
        console.log(humanChoice);
        console.log(computerChoiceString);
        humanScore++;
        console.log(win)
    } else if (humanChoice === "paper" && computerChoiceString === "scissors") {
        console.log(humanChoice);
        console.log(computerChoiceString);
        computerScore++;
        console.log(lose);        
    } else if (humanChoice === "paper" && computerChoiceString === "rock") {
        console.log(humanChoice);
        console.log(computerChoiceString);
        humanScore++;
        console.log(win);       
    } else if (humanChoice === "scissors" && computerChoiceString === "rock") {
        console.log(humanChoice);
        console.log(computerChoiceString);
        computerScore++;
        console.log(lose);    
    } else if (humanChoice === "scissors" && computerChoiceString === "paper") {
        console.log(humanChoice);
        console.log(computerChoiceString);
        humanScore++;
        console.log(win);      
    }

}

// console.log(playRound(GetHumanChoice(), getComputerChoice()));

// playRound 5 times
// keep track of the scores 
let humanScore = 0;
let computerScore = 0;
// declare a winner at the end

/* function playGame */

function playGame() {
 /* // The players score variables */
    humanScore = 0;
    computerScore = 0;

// victory and loss variables
    const victory = "You win the match"
    const loss = "You loss the match"

// playRound function call 
    for (let games = 1; games <= 5; games++) {

    playRound(GetHumanChoice(), getComputerChoice())

    }
    if(humanScore > computerScore) {
        console.log(victory) ;
    } else {
        console.log(loss);
    }
}

playGame();
