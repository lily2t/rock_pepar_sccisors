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


/*function playRound(playerSelection, computerSelection){

    if(playerSelection === )
    return "Wow! You beat the Computer";
}*/