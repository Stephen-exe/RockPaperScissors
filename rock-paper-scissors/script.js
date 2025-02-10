const playRPS = function () {
  const stats = {
    wins: 0,
    ties: 0,
    losses: 0,
    count: {
      rock: 0,
      paper: 0,
      scissors: 0,
    },
  };

  const options = [`R`, `P`, `S`];
  let keepPlaying = true;
  while (keepPlaying) {

    let userChoice = window.prompt(`Enter R, P, or S:`);
    if (!userChoice) {
      return;
    }

    userChoice = userChoice.toUpperCase();

    if (!options.includes(userChoice)) {
      window.alert(`Please enter a valid choice.`);
    } else {

      if (userChoice === `R`) {
        stats.count.rock++;
      } else if (userChoice === `P`) {
        stats.count.paper++;
      } else {
        stats.count.scissors++;
      }

      const cpuMagic = Math.floor(Math.random() * options.length);
      const cpuChoice = options[cpuMagic];

      window.alert(`The computer chose ${cpuChoice}`);

      if (userChoice === cpuChoice) {
        stats.ties++;
        window.alert("It's a tie!");

      } else if (
        (userChoice === `R` && cpuChoice === `S`) ||
        (userChoice === `P` && cpuChoice === `R`) ||
        (userChoice === `S` && cpuChoice === `P`)
      ) {
        stats.wins++;
        window.alert(`You win!`);

      } else {
        stats.losses++;
        window.alert(`You lost!`);
      }

      keepPlaying = window.confirm(`Play again?`);
    }
  }
  window.alert(`Stats:
    Wins: ${stats.wins}
    Loses: ${stats.losses}
    Ties: ${stats.ties}
  Your Choices:
    Rock: ${stats.count.rock}
    Paper: ${stats.count.paper}
    Scissors: ${stats.count.scissors}`);
};
playRPS();