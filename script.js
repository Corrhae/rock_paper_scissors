function getComputerChoice(){
    const randomNUmber =Math.floor( Math.random() * 3);
    console.log(`Computer chose: ${randomNUmber}`);
    if(randomNUmber === 1){
        return "scissors";
    }
    if(randomNUmber === 2){
        return "rock";

    } else{
        return "paper";
    }
    }

    function getHumanChoice(){
        const humanChoice = prompt();
        console.log(`You chose: ${humanChoice}`)
        

        return humanChoice;

    }
        
      

    
    
    function playGame(){
        
        let humanScore = 0;
        let computerScore = 0;
        


            function playRound(humanChoice, computerChoice){
                //humanChoice = humanChoice.toLowerCase();
                if(humanChoice === "rock" && computerChoice === "paper"){
                    computerScore++;
                    return "You lose! Paper beats Rock.";
                }
                if(humanChoice === "rock" && computerChoice === "scissors"){
                    humanScore++;
                    return "You win! Rock beats Scissors."; 
                    
                }
                
                if(humanChoice === "paper" && computerChoice === "rock"){
                    humanScore++;
                    return "You win! Paper beats Rock.";
                }
                if(humanChoice === "paper" && computerChoice === "scissors"){
                    computerScore++;
                    return "You lose! Scissors beats paper";
                }
        
                if(humanChoice === "scissors" && computerChoice === "paper"){
                    humanScore++;
                    return "You win! Scissors beats paper";
                }
                
                if(humanChoice === "scissors" && computerChoice === "rock"){
                    computerScore++;
                    return "You lose! Rock beats Scissors";
                }
                else if(humanChoice === computerChoice){
                    return "It's a tie.";
                }

        }
       console.log(playRound(getHumanChoice(),getComputerChoice() ));
       console.log(playRound(getHumanChoice(),getComputerChoice() ));
       console.log(playRound(getHumanChoice(),getComputerChoice() ));
       console.log(playRound(getHumanChoice(),getComputerChoice() ));
       console.log(playRound(getHumanChoice(),getComputerChoice() ));
       
       console.log(gameWinner(humanScore,computerScore));
        
    }

    function gameWinner(humanScore, computerScore){
        if(humanScore === computerScore){
            console.log("Your Score:" + humanScore);
            console.log("PC Score:" + computerScore);
            return "It's a tie"
        }
        if(humanScore > computerScore){
            console.log("Your Score:" + humanScore);
            console.log("PC Score:" + computerScore);
            return "You win!"  
            
        } else{
            return "You lose!"
        }

    }
    
    
    
    console.log(playGame());


