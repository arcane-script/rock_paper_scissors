function GetComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return "rock";
    }
    else if (randomNumber <= 0.66 && randomNumber > 0.33) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function GetHumanChoice() {
    let choice = prompt("choose rock,paper,scissors:");
    return choice;
}
function playGame(){
let humanscore = 0;
let computerscore = 0;

function playRound(HumanChoice, ComputerChoice) {

if (HumanChoice === ComputerChoice) {
    console.log("It's a tie");
}
else if (
    HumanChoice === "rock" && ComputerChoice === "scissors" ||
    HumanChoice === "paper" && ComputerChoice === "rock" ||
    HumanChoice === "scissors" && ComputerChoice === "paper"
) {
    console.log(`you won! ${HumanChoice} defeated ${ComputerChoice}`);
    humanscore++;
}
else {
    console.log(`you lost! ${ComputerChoice} defeated ${HumanChoice}`);
    computerscore++;
}
}

for (let i = 0; i < 5; i++) {
const HumanChoice = GetHumanChoice();
const ComputerChoice = GetComputerChoice();

playRound(HumanChoice, ComputerChoice);

console.log(humanscore);
console.log(computerscore);
}
if (humanscore>computerscore ){
console.log("you won ! ");

}
else if (humanscore === computerscore){
console.log("It's a tie ! ");
}
else {
console.log("you lost !");
}
}

playGame();