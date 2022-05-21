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


function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock Paper Scissors").toLowerCase()
        let computerSelection = computerPlay()
        console.log(`playerSelection is ${playerSelection}`)
        console.log(`computerSelection is ${computerSelection}`)
        console.log(matchRound(playerSelection, computerSelection))
    }
    console.log("Game Over; enter 'game()' to play again")
}