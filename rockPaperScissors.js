function chooseComputerMove() {
    let moves = ["rock", "paper", "scissors"];
    let computerMove = moves[Math.floor(Math.random() * moves.length)];

    return computerMove;
}

function getUserMove(){
    const rl = require('readline-sync');

    let comparisonArr = ["rock", "paper", "scissors"];

    let choice = rl.question("Type in rock, paper, or scissors: ");

    if (!comparisonArr.includes(choice)){
        console.log("Invalid input, please try again")
        //rl.close();
        getUserMove();
    } 

    //rl.close();
    return choice;
}


function determineResult(playerChoice, computerChoice) {
    //returns 0 if the player wins and 1 if the computer wins. Returns 2 if its a tie.

    if (playerChoice == computerChoice) {
        return 2;
    }

    switch(playerChoice) {
        case "rock":
            return (computerChoice == "scissors" ? 0 : 1);
        case "paper":
            return (computerChoice == "rock" ? 0 : 1);
        case "scissors":
            return (computerChoice == "paper" ? 0 : 1);
    }
}


function game() {
    let userPoints=0, computerPoints = 0;
    console.log("Welcome to Rock, Paper, Scissors!");

    for (let i=0; i<=4; i++) {
        let userChoice = getUserMove();
        let computerChoice = chooseComputerMove();
        let result = determineResult(userChoice, computerChoice);

        console.log(`The computer chose ${computerChoice}.`);

        if (result == 0) {
            userPoints += 1;
            console.log("You won this round!\n");
        } else if (result == 1) {
            computerPoints += 1;
            console.log("You lost this round:(\n");
        } else if (result == 2) {
            userPoints += 1, computerPoints += 1;
            console.log("You tied this round.\n");
        }
    }

    console.log(`Final Score: ${userPoints} - ${computerPoints}`);
    if (userPoints > computerPoints) {
        console.log("You Won! Congratulations.");
    } else if (userPoints < computerPoints) {
        console.log("You lost:((");
    } else if (userPoints == computerPoints) {
        console.log("Tie Game!");
    }
}

game();
