let humanScore = 0;
let computerScore = 0;
let gameCounter = 0;
const score = document.createElement("p");
const scoreBoard = document.querySelector("#scoreBoard");

scoreBoard.appendChild(score)

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

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    const gameOutcome = document.createElement("p");
    scoreBoard.appendChild(gameOutcome);

    if (humanChoice === computerChoice){
        console.log(`Tie! Human: ${humanChoice}, Computer: ${computerChoice}`);
        gameOutcome.textContent = `Tie! Human: ${humanChoice}, Computer: ${computerChoice}`
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`Congrats, you won! ${humanChoice} beats ${computerChoice}`);
        gameOutcome.textContent = `Congrats, you won! ${humanChoice} beats ${computerChoice}`
        ++humanScore;
    } else {
        console.log(`Sorry, you lost! ${computerChoice} beats ${humanChoice}`);
        gameOutcome.textContent = `Sorry, you lost! ${computerChoice} beats ${humanChoice}`
        ++computerScore;
    }
    score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
    
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

const humanChoice = document.querySelector('#humanChoice');

humanChoice.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
    case 'rock':
        playRound(target.id);
        break;
    case 'paper':
        playRound(target.id);
        break;
    case 'scissors':
        playRound(target.id)
        break;
    }
    ++gameCounter;
    
    if (gameCounter === 5){
        const gameOutcome = document.createElement("p");
        scoreBoard.appendChild(gameOutcome);

        if (humanScore > computerScore) {
            console.log(`Congrats you won the whole game! Human: ${humanScore}, Computer: ${computerScore}`);
            gameOutcome.textContent = "Congrats you won the whole game!"
        } else if (humanScore < computerScore) {
            console.log(`Sorry you lost the whole game! Human: ${humanScore}, Computer: ${computerScore}`);
            gameOutcome.textContent = "Sorry you lost the whole game!"
        } else {
            console.log(`Looks like you tied! Human: ${humanScore}, Computer: ${computerScore}`);
            gameOutcome.textContent = "Looks like you tied the game!"
        }
        
        score.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

        humanScore = 0;
        computerScore = 0;
        gameCounter= 0;
    }
        
    }
    
)