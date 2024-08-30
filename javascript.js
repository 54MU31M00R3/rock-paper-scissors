function getComputerChoice(){
    let choice;
    let value = Math.floor(Math.random() * 3) + 1;
    choice = value === 1 ? "rock"
        : value === 2 ? "scissors"
        : "paper";
    return choice;
}