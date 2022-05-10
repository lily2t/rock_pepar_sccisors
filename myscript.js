function computerPlay(){
    let computerChoice = () => {
      let randomNumber = (Math.floor(Math.random() * 3));
        if(randomNumber === 0){
            return "Rock";
        } else if(randomNumber === 1){
            return "Paper";
        }else{
            return "Scissors";
        }
  
    };
    console.log(computerPlay());
}

/*function playRound(playerSelection, computerSelection){

    if(playerSelection === )
    return "Wow! You beat the Computer";
}*/