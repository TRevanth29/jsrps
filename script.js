function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      alert(result);
  
      if (result.startsWith("You win")) {
        playerScore++;
      } else if (result.startsWith("You lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      alert(`You won the game! Final score: ${playerScore} - ${computerScore}`);
    } else if (playerScore < computerScore) {
      alert(`You lost the game! Final score: ${playerScore} - ${computerScore}`);
    } else {
      alert(`The game is a tie! Final score: ${playerScore} - ${computerScore}`);
    }
  }
  
  function game() {
    const playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    alert(result);
  }
  
  game();       