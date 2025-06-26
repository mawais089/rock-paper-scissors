function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 3)

    if (randomNum === 0) {
        return "rock"
    }

    else if (randomNum === 1) {
        return "paper"
    }

    else if (randomNum === 2) {
        return "scissors"
    }

}
function getUserChoice() {

    let userChoice = prompt("Enter Your Choice", "")

    if (userChoice.toLowerCase() === "rock") {
        return "rock"
    }

    else if (userChoice.toLowerCase() === "paper") {
        return "paper"
    }

    else if (userChoice.toLowerCase() === "scissors") {
        return "scissors"
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection = "";
    let computerSelection = "";

    function playRound(humanChoice, computerChoice) {

        if (String(humanChoice).toLowerCase() === "rock" && computerChoice === "scissors") {
            console.log(`+1 Rock crashes Scissors.`)
            humanScore += 1
        }
        else if (String(humanChoice).toLowerCase() === "scissors" && computerChoice === "rock") {
            console.log("Rock crashes Scissors.")
            computerScore += 1
        }
        else if (String(humanChoice).toLowerCase() === "paper" && computerChoice === "rock") {
            console.log("+1 Paper covers Rock.")
            humanScore += 1
        }
        else if (String(humanChoice).toLowerCase() === "rock" && computerChoice === "paper") {
            console.log("Paper Covers Rock.")
            computerScore += 1
        }
        else if (String(humanChoice).toLowerCase() === "scissors" && computerChoice === "paper") {
            console.log("+1 Scissors cuts Paper.")
            humanScore += 1
        }
        else if (String(humanChoice).toLowerCase() === "paper" && computerChoice === "scissors") {
            console.log("Scissors cuts Paper.")
            computerScore += 1
        } else {
            console.log("Draw! Lets Play again.");
        }
    }

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    if (humanScore > computerScore) {
        console.log(`You are the Winner! YourScore ${humanScore} - ComputerScore ${computerScore}`)
    }
    else if(humanScore === computerScore){
        console.log(`Draw! YourScore ${humanScore} - ComputerScore ${computerScore}`)
    }
    else {
        console.log(`You Lose! Computer is the Winner! YourScore ${humanScore} - ComputerScore ${computerScore}`)
    }

}
playGame();
