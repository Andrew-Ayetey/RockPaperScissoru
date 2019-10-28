point = "None"
    function computerPlay(){
    n = Math.random()
    if (n <= .33){
        return "ROCK";
        }
    else if (n > .33 && n <= .66){
        return "PAPER";
        }
    else{
        return "SCISSORS";
    }
};
    function rpsRound(playerSelection, computerSelection){
            // find who picks rock//
            ///Rock beats Scissors, Scissors beats Paper, Paper beats Rock, doubles tie///
        if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
            return ["It's a tie!", point = "None"];
        }
        else if (playerSelection.toUpperCase() == "ROCK")
        {
            if (computerSelection.toUpperCase() == "PAPER")
                { 
                    return ["Paper Beats Rock! You Lose!", point = "Computer"];
                }
            else
            {
                return ["Rock Beats Scissors. You Win!", point = "Player"];
            }

        }
        else if (playerSelection.toUpperCase() == "PAPER")
        {
            if (computerSelection.toUpperCase() == "SCISSORS")
                {
                    return ["Scissors Beats Paper! You Lose!", point = "Computer"];
                }
            else
            {
                return ["Paper Beats Rock. You Win!", point = "Player"];
            }

        }
        else if (playerSelection.toUpperCase() == "SCISSORS")
        {
            if (computerSelection.toUpperCase() == "ROCK")
                {
                    return ["Rock Beats Scissors! You Lose!", point = "Computer"];
                }
            else
            {
                return ["Scissors Beats Paper. You Win!", point = "Player"];
            }

        };
};

//div selecetor variables
var playerSelect = document.querySelector('.buttons')
var playerScoreBox = document.querySelector('#PlayerScoreDiv')
var computerScoreBox = document.querySelector('#ComputerScoreDiv')
var winnerBox = document.querySelector('#WinnerBox')

//variables
var PlayerScore = 0;
var ComputerScore = 0;
var computerChoice = computerPlay()


//functions
var playRound = function(){
    switch(point){
        case "Player":
            return "Player"
            break;
        case "Computer":
            return "Computer"
            break;
        case "None":
            return "None"
    }
}





///on click changes

playerSelectButton = playerSelect.addEventListener('click', (e) => {
    var computerChoice = computerPlay();
    var game = rpsRound(e.target.id, computerChoice);
    point = game[1]
    console.log(point)
    if (point == "Player"){
        console.log(point)
        playerScoreBox.textContent = PlayerScore += 1
    }
    else if (point == "Computer"){
        computerScoreBox.textContent =  ComputerScore += 1
    }
    else {};
    if(PlayerScore == 5){
        winnerBox.textContent = "Player Wins! Humans Rule!"
        PlayerScore = 0
        ComputerScore = 0
        playerScoreBox.textContent = 0
        computerScoreBox.textContent = 0
      
    }
    else if(ComputerScore == 5){
        winnerBox.textContent = "Computer Wins! Bow before Alogrithmic Singularity!"
        PlayerScore = 0
        ComputerScore = 0
        playerScoreBox.textContent = 0
        computerScoreBox.textContent = 0
    }
    else {};
})
