function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <= 0.66 && randomNumber > 0.33) {
    return "paper";
  } else {
    return "scissors";
  }
}


const score= document.querySelector("#score");
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(HumanChoice, ComputerChoice) {
   if (gameOver)  return ; 
  if (HumanChoice === ComputerChoice) {
    result.textContent = `it's a tie you both selected :  ${HumanChoice}`;
  } else if (
    (HumanChoice === "rock" && ComputerChoice === "scissors") ||
    (HumanChoice === "paper" && ComputerChoice === "rock") ||
    (HumanChoice === "scissors" && ComputerChoice === "paper")
  ) {
    humanScore++;
    result.textContent = `you won! ${HumanChoice} defeated ${ComputerChoice}`;
  } else {
    computerScore++;
    result.textContent = `you lost! ${ComputerChoice} defeated ${HumanChoice}`;
  }
  score.textContent = `you : ${humanScore} | computer : ${computerScore}`;
if (humanScore===5 || computerScore===5){
    gameOver= true; 
    if (humanScore===5){
        result.textContent= `you won the  game `;

    }
    else result.textContent=  'you lost the game ';
}




}

const result = document.querySelector("#results");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
