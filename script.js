const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");
const round = document.querySelector("#round");
const result = document.querySelector("#result");
const refresh = document.querySelector("#refresh");
let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;

rock.addEventListener("click", () => {
  playGame("rock");
});

paper.addEventListener("click", () => {
  playGame("paper");
});

scissors.addEventListener("click", () => {
  playGame("scissors");
});

refresh.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  totalRounds = 0;
  result.textContent = "Current score";
  round.textContent = "0/0";
  score.textContent = "Human: 0 - CPU: 0";
});

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function declareWinner() {
  if (humanScore > computerScore) {
    round.textContent = "5/5 " + "You won the game!!!";
  } else if (humanScore < computerScore) {
    round.textContent = "5/5 " + "You lost against a computer! hahaha";
  } else {
    round.textContent = "5/5 " + "A draw!!!???!!!???";
  }
}

function playGame(humanChoice) {
  function playRound() {
    let computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
      result.textContent = "Current score - You lost! Computer played paper.";
      computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
      result.textContent =
        "Current score - It's a draw!!! Computer played rock";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      result.textContent = "Current score - You won! Computer played scissors.";
      humanScore += 1;
    }

    if (humanChoice === "paper" && computerChoice === "paper") {
      result.textContent = "Current score - It's a draw!!!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      result.textContent =
        "Current score - You lost! Computer played scissors.";
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      result.textContent = "Current score - You won! Computer played rock.";
      humanScore += 1;
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
      result.textContent = "Current score - You won! Computer played paper.";
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      result.textContent = "Current score - You lost! Computer played rock.";
      computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      result.textContent = "Current score - It's a draw!!!";
    }

    score.textContent = `Human: ${humanScore} - CPU: ${computerScore}`;
    round.textContent = `${totalRounds}/5`;
  }

  if (totalRounds === 4) {
    totalRounds++;
    playRound();
    declareWinner();
  } else if (totalRounds > 4) {
    // don't play if game ended already
  } else if (totalRounds < 4) {
    totalRounds++;
    playRound();
  }
}
