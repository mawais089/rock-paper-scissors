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
            humanScore += 1;
            alert(`+1 YourScore = ${humanScore}`);
        }
        else if (String(humanChoice).toLowerCase() === "scissors" && computerChoice === "rock") {
            computerScore+=1;
            alert(`+1 ComputerScore = ${computerScore}`);
        }
        else if (String(humanChoice).toLowerCase() === "paper" && computerChoice === "rock") {
            humanScore+=1;
            alert(`+1 YourScore = ${humanScore}`);
        }
        else if (String(humanChoice).toLowerCase() === "rock" && computerChoice === "paper") {
            computerScore+=1;
            alert(`+1 ComputerScore = ${computerScore}`);
        }
        else if (String(humanChoice).toLowerCase() === "scissors" && computerChoice === "paper") {
            humanScore+=1;
            alert(`+1 YourScore = ${humanScore}`);
        }
        else if (String(humanChoice).toLowerCase() === "paper" && computerChoice === "scissors") {
            computerScore+=1;
            alert(`+1 ComputerScore = ${computerScore}`);
        }
        else {
            console.log("Draw! Lets Play again.");
        }
    }

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    alert(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    alert(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    alert(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    alert(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    alert(`Your Choice ${humanSelection} - Computer Choice ${computerSelection}`);

    if (humanScore > computerScore) {
        alert(`You are the Winner! YourScore ${humanScore} - ComputerScore ${computerScore}`)
    }
    else if (humanScore === computerScore) {
        alert(`Draw! YourScore ${humanScore} - ComputerScore ${computerScore}`)
    }
    else {
        alert(`You Lose! Computer is the Winner! YourScore ${humanScore} - ComputerScore ${computerScore}`)
    }

}
playGame();
