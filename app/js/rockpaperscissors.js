function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

function getPlayerMove(move) {
    return getInput();
}

function getComputerMove(move) {
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var x = "rock";
    var y = "scissors";
    var z = "paper";
    if (playerMove == x && computerMove == y) {
        return ("Player Wins!");
    }
    else if (playerMove == y && computerMove == z) {
        return ("Player Wins!");
    }
    else if (playerMove == z && computerMove == x) {
        return ("Player Wins!");
    }
    else if (playerMove == x && computerMove == z) {
        return ("Computer Wins!");
    }
    else if (playerMove == y && computerMove == x) {
        return ("Computer Wins!");
    }
    else if (playerMove == z && computerMove == y) {
        return ("Computer Wins!");
    }
    else if (playerMove === computerMove) {
        return ("Tie!");
    }
    else {
        return ("There seems to be an error in your input. Try again!")
    }
}


function playToFive() {
    console.log("Rock... Paper... Scissors!");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        
        if (winner === "Player Wins!") {
            playerWins += 1;
        }
        else if (winner === "Computer Wins!") {
            computerWins +=1;
        }
        console.log("You chose " + playerMove + ". " + "The computer chose " + computerMove + ".");
        console.log(winner);
        console.log("The score so far is " + playerWins + " : " + computerWins + ".");
}
    while (playerWins == 5 || computerWins == 5) {
        if (playerWins === 5) {
            return "Congratulations! You won!";
        }
        else if (computerWins === 5) {
            return "Sorry! You lost!";
        }
    }
    return [playerWins, computerWins];
}
playToFive();

//completed and tested code.//