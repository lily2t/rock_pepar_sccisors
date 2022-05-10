function computerPlay() {
    const computerChoice = ["Rock","Paper", "Scissors"];
        const randomNumber = (Math.floor(Math.random() * computerChoice.length));
        if (randomNumber === 0) {
            return "Rock";
        } else if (randomNumber === 1) {
            return "Paper";
        } else if(randomNumber === 2){
            return "Scissors";
        }
        
}
console.log(computerPlay());


function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return "It is tie."
        }else if(computerSelection === "scissors"){
            return "Congrats, you won!";
        }else if(computerSelection === "paper"){
            return "You loose maybe next time."
        }
    }


    if(playerSelection === "scissors"){
        if(computerSelection === "scissors"){
            return "It is tie."
        }else if(computerSelection === "paper"){
            return "Congrats, you won!";
        }else if(computerSelection === "rock"){
            return "You loose maybe next time."
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            return "It is tie."
        }else if(computerSelection === "rock"){
            return "Congrats, you won!";
        }else if(computerSelection === "scissors"){
            return "You loose maybe next time."
        }
    }


}

function game(){
    for(let i= 0; i < 5; i++){
        let playerSelect = window.prompt("Enter yor move");
        computerSelection = computerPlay();
        console.log(playRound(playerSelect, computerSelection));
    }
}

    /*playerSelection = "rock";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));*/