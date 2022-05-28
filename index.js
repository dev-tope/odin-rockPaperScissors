const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors =  document.querySelector(".scissors");
const compPlay = document.querySelector(".compPlay");
const result = document.querySelector(".result");
const playerScoreDiv = document.querySelector(".yourScore");
const computerScoreDiv = document.querySelector(".computerScore");
const start = document.querySelector(".start-btn")
const container = document.querySelector(".container");

let playerScore = 0;
let computerScore = 0;

let aggregateScore;

let playerSelection;
let playRound;



function computerPlay() {
    let selection = Math.floor(Math.random()*3 + 1);
    if (selection === 1) {
        return "rock";
    } else if (selection === 2) {
        return "paper";
    } else if (selection === 3) {
        return "scissors";
    }
}

function matchRound(playerSelection, computerSelection){
    if (computerSelection === "rock" && playerSelection === "rock"){
        return `DRAW`
    } else if (computerSelection === "rock" && playerSelection === "paper"){
        return `WIN`
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return `LOST`
    } else if (computerSelection === "paper" && playerSelection === "paper"){
        return `DRAW`
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return `LOST`
    } else if (computerSelection === "paper" && playerSelection === "scissors"){
        return `WIN`
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return `DRAW`
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        return `LOST`
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return `WIN`
    }
}

function scoreKeeping(){
    if(playRound === 'WIN'){++playerScore};
    if(playRound === 'LOST'){++computerScore};
    aggregateScore = playerScore + computerScore;
}

function logResults() {
    console.log(playRound)
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(`Aggregate score: ${aggregateScore}`);
}

function gamePlay() {
    computerSelection = computerPlay();
    compPlay.innerText = computerSelection; 
    playRound = matchRound(playerSelection, computerSelection);

    if(playerScore === 3){
        container.innerText = "You win the round";
    } else if (computerScore === 3) {
        container.innerText = "Computer wins the round"
    }
}

function displayScore() {
    result.innerText = `${playRound}`;
    playerScoreDiv.innerText = `${playerScore}`;
    computerScoreDiv.innerText = `${computerScore}`;
}

function announceWinner(){
    if(playerScore > computerScore){
        console("You win")
    } else {
        console.log ("Computer wins")
    }
}

function playFlow() {
    gamePlay();
    scoreKeeping();
    logResults();
    displayScore();
}

rock.addEventListener('click',  () => {
    playerSelection = "rock",
    playFlow();
})

paper.addEventListener('click',  () => {
    playerSelection = "paper"
    playFlow();
})


scissors.addEventListener('click',  () => {
    playerSelection = "scissors";
    playFlow();
})