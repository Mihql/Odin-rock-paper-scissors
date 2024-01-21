function getComputerChoice(){

    const choice = ["rock", "paper", "scissor"]
    const randomIndex = Math.floor(Math.random() * choice.length)
    return choice[randomIndex] 
}



function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

const playerChoice = "rock";
const computerChoice = getComputerChoice();

const result = playRound(playerChoice, computerChoice);
console.log(result)