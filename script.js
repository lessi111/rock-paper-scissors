function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    return prompt("Which will you play? ('rock') ('paper') ('scissors'): ");
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let totalRounds;

    function playRound() {
        let computerChoice = getComputerChoice().toLowerCase();
        let humanChoice = getHumanChoice();

        if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
            console.log("You had ONE job! It was rock, paper, or scissors!");
            console.log("Why " + humanChoice + ", really? You lost!!!!!! No more attempts!!!");
            computerScore = 5;
            totalRounds = 5;
        }
    
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("You lost! Computer played paper.");
            computerScore += 1;
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            console.log("It's a draw!!!");
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log("You won! Computer played scissors.");
            humanScore += 1;
        }
    
        if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log("It's a draw!!!");
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log("You lost! Computer played scissors.");
            computerScore += 1;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("You won! Computer played rock.");
            humanScore += 1;
        }
        
        if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("You won! Computer played paper.");
            humanScore += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log("You lost! Computer played rock.");
            computerScore += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log("It's a draw!!!");
        }
    }
    
    for (totalRounds = 0; totalRounds < 5; totalRounds++) {
        playRound();
    }
    

    if (humanScore > computerScore) {
        console.log("You won the game!!!");
    } else {
        console.log("You lost against a computer! hahaha")
    }
}

playGame();