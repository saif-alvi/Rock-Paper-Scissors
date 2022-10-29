let playerScore=0;
let computerScore=0;

const display = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=> button.addEventListener('click', SelectionMadeStarter));
const currentPlay= document.createElement('p');
    display.appendChild(currentPlay);
const playerScoreBoard= document.createElement('p');
    playerScoreBoard.textContent=`Player = ${playerScore}`
const computerScoreBoard= document.createElement('p');
    computerScoreBoard.textContent=`Computer = ${computerScore}`
    display.appendChild(playerScoreBoard)
    display.appendChild(computerScoreBoard)
const result = document.createElement('p');
    display.appendChild(result)


function SelectionMadeStarter(event){
    result.textContent=''
    console.log(event.target);
    console.log(playRound(event.target.textContent,getComputerChoice()));
    
    if (playerScore == 5){
        playerScore = 0;
        computerScore = 0;
        playerScoreBoard.textContent=`Player = ${playerScore}`
        computerScoreBoard.textContent=`Computer = ${computerScore}`
        result.textContent='Game Over!, The Player wins!'
    }
    else if (computerScore == 5){
        playerScore = 0;
        computerScore = 0;
        playerScoreBoard.textContent=`Player = ${playerScore}`
        computerScoreBoard.textContent=`Computer = ${computerScore}`
        result.textContent='Game Over!, The Computer wins!'
    }

    
}

///Helpers -----------------


let playRound = (playerSelection, computerSelection) => { 
    let x = playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();
    let y = computerSelection;

    if (x == 'Rock' && y == 'Scissors' || x == 'Paper' && y == 'Rock' || x == 'Scissors' && y == 'Paper' ){
        playerScore+=1;
        playerScoreBoard.textContent=`Player = ${playerScore}`
        currentPlay.textContent=`You win! ${x} beats ${y}.`
    }
    else if (x == y){
        currentPlay.textContent=`Tie! ${y} and ${x} are the same.`
    }
    else{
        computerScore+=1;
        computerScoreBoard.textContent=`Computer = ${computerScore}`
        currentPlay.textContent=`You lose! ${y} beats ${x}.`
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

/// Old way of running code, no longer needed
function Game(){
    console.log(playRound(window.prompt("Do you choose Rock, Paper or Scissors?"),getComputerChoice()));    
    console.log("Game Over.")
}





