function getComputerChoice(){
    // 3 choices : rock , paper , scissor
    // 1: rock , 2: paper, 3:scissor
    let randomChoice=parseInt(Math.random()*3)+1;
    let computerChoice = '';
    if(randomChoice==1){
        computerChoice='rock';
    }
    else if(randomChoice==2){
        computerChoice='paper';
    }
    else{
        computerChoice='scissor'
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice=prompt("Enter your choice(rock , paper or scissor): ");
    return humanChoice;
}

function playRound(userChoice,computerChoice){
    userChoice=userChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();
    if(userChoice === computerChoice){
        humanScore+=0;
        computerScore+=0;
        console.log("Its a tie this round.");
    }
    else if((userChoice==='rock' && computerChoice==='scissor') ||
       (userChoice==='paper'&& computerChoice==='rock') ||
       (userChoice==='scissor'&& computerChoice==='paper')){
        humanScore++;
        console.log("User wins this round.")
       }
    else{
        computerScore++;
        console.log("Computer wins this round");
       }
}

function playGame(n){

    for(let i=0;i<n;i++){
        console.log(`Round: ${i+1}`)
        let userChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        console.log('User choice: '+ userChoice);
        console.log('Computer choice: ' +computerChoice);
        playRound(userChoice,computerChoice);
            console.log('User Score: '+humanScore);
            console.log('Computer Score: '+computerScore);
            console.log();
    }
}

let humanScore =0;
let computerScore =0;

function startGame(){
   let n=parseInt(prompt("Enter the number of times to play the game: "));
   playGame(n);
   console.log("Game Result: ")
   if(humanScore===computerScore){
    console.log("Its a tie game");
    alert("Its a time game");
   }
   else if(humanScore>computerScore){
    console.log("User wins");
    alert("User Wins");
   }
   else{
    console.log("Computer wins");
    alert("Computer wins");
   }
}


startGame();
