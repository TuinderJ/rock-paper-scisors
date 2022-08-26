let wins = 0;
let losses = 0;
let ties = 0;
let yourChoice;

function getPlayerChoice() {
  yourChoice = prompt('Type: R, P OR S');
  if (yourChoice != 'R' && yourChoice != 'P' && yourChoice != 'S') {
    alert('Invalid entry, please try again.');
    getPlayerChoice();
  }
}

function playRPS() {
  getPlayerChoice();
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      alert('The computer chose: R')
      if (yourChoice === 'R') {
        alert('It\'s a tie');
        ties++;
      }
      if (yourChoice === 'P') {
        alert('You\'ve won! Congratulations!!');
        wins++;
      }
      if (yourChoice === 'S') {
        alert('So close. You lost this time.');
        losses++;
      }
      break;
      
    case 1:
      alert('The computer chose: P')
      if (yourChoice === 'R') {
        alert('So close. You lost this time.');
        losses++;
      }
      if (yourChoice === 'P') {
        alert('It\'s a tie');
        ties++;
      }
      if (yourChoice === 'S') {
        alert('You\'ve won! Congratulations!!');
        wins++;
      }
      break;
      
    default:
      alert('The computer chose: S')
      if (yourChoice === 'R') {
        alert('You\'ve won! Congratulations!!');
        wins++;
      }
      if (yourChoice === 'P') {
        alert('So close. You lost this time.');
        losses++;
      }
      if (yourChoice === 'S') {
        alert('It\'s a tie');
        ties++;
      }
      break;
  }
  alert(`Wins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
  if (confirm('Would you like to play again?')) {
    playRPS();
  } else {
    document.getElementById('header').innerText = 'Final Score'
    document.getElementById('final-results').innerText = `Wins: ${wins}\nLosses: ${losses}\nTies: ${ties}`;
  }
}
playRPS();