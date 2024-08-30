let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice;
    let value = Math.floor(Math.random() * 3) + 1;
    choice = value === 1 ? "rock"
        : value === 2 ? "scissors"
        : "paper";
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Rock... Paper... Scissors... Shoot!");
    choice = choice.toLowerCase();
    choice = choice === "rock" ? "rock"
        : choice === "scissors" ? "scissors"
        : choice === "paper" ? "paper"
        : undefined;
    return choice;
}