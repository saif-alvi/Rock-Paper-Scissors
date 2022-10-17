





let getComputerChoice = () => {let x =Math.random()
    if (x < 0.33){
        return 'Rock';
    }
    else if(x>=0.66){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}

let playRound = (playerSelection, computerSelection) => { 

    let x =playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();

    let y = computerSelection;

    if (x == 'Rock' && y == 'Scissors' || x == 'Paper' && y == 'Rock' || x == 'Scissors' && y == 'Paper' ){
        return `You win! ${x} beats ${y}`
    }
    else{
        return `You lose! ${y} beats ${x}`
    }
}

function Game(){

    for (let i = 0; i < 5; i++){
        console.log(playRound(window.prompt("Do you choose Rock, Paper or Scissors?"),getComputerChoice()));
        
    }

}