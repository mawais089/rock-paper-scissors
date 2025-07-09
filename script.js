let userScore = document.querySelectorAll('.results');
let computerScore =  

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

    const selections = document.querySelectorAll('.selection');

    selections.forEach(selectionButton => {
        selectionButton.addEventListener('click', (e) => {

            const targetSelection = e.target.id;

            switch (targetSelection) {
                case "rock":
                    playRound(targetSelection, getComputerChoice());
                    break;
                case "paper":
                    playRound(targetSelection, getComputerChoice());
                    break;
                case "scissors":
                    playRound(targetSelection, getComputerChoice());
                    break;
            }
        })
    })
}
playGame();