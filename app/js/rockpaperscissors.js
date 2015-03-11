////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
    move = getInput() || move;
    return getPlayerMove;
}

function getComputerMove(move) {
    var move;
    move = randomPlay() || move;
    return getComputerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    var x = "rock";
    var y = "scissors";
    var z = "paper";
    if (playerMove == x && computerMove == y) {
        winner = player;
        console.log("Player Wins!");
    }
    else if (playerMove == y && computerMove == z) {
        winner = player;
        console.log("Player Wins!");
    }
    else if (playerMove == z && computerMove == x) {
        winner = player;
        console.log("Player Wins!");
    }
    else if (playerMove == x && computerMove == z) {
        winner = computer;
        console.log("Computer Wins!");
    }
    else if (playerMove == y && computerMove == x) {
        winner = computer;
        console.log("Computer Wins!");
    }
    else if (playerMove == z && computerMove == y) {
        winner = computer;
        console.log("Computer Wins!");
    }
    else if (playerMove == "rock" && computerMove == "rock" {
        winner = tie;
    }
    else if (playerMove == "scissors" && computerMove == "scissors") {
        winner = tie;
    }
    else if (playerMove == "paper" && computerMove == "paper") {
        winner = tie;
    }
    return winner;
} -

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

