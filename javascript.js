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

function playRound(){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (humanChoice === computerChoice){
        console.log(`Tie! Human: ${humanChoice}, Computer: ${computerChoice}`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`Congrats, you won! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    } else {
        console.log(`Sorry, you lost! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    }
    
}

function playGame(){
    for (i = 1; i <= 5; i++){
        playRound();
    }
    if (humanScore > computerScore) {
        console.log(`Congrats you won the whole game! Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Sorry you lost the whole game! Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`Looks like you tied! Human: ${humanScore}, Computer: ${computerScore}`);
    }
    
    humanScore = 0;
    computerScore = 0;
}