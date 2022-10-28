let buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
button.addEventListener('click', SelectionMadeStarter);
})


function SelectionMadeStarter(event){
    console.log(event.target);
    console.log(playRound(event.target.textContent,getComputerChoice()));
}


let playRound = (playerSelection, computerSelection) => { 

    let x = playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();
    let y = computerSelection;

    if (x == 'Rock' && y == 'Scissors' || x == 'Paper' && y == 'Rock' || x == 'Scissors' && y == 'Paper' ){
        return `You win! ${x} beats ${y}.`
    }
    else if (x == y){
        return `Tie! ${y} and ${x} are the same.`
    }
    else{
        return `You lose! ${y} beats ${x}.`
    }
}


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


function Game(){

    console.log(playRound(window.prompt("Do you choose Rock, Paper or Scissors?"),getComputerChoice()));    
    console.log("Game Over.")
}





