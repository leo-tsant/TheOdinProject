const getComputerChoice = () => {
  let computerChoice = Array("Rock", "Paper", "Scissors");
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

// document.getElementById("rock").addEventListener("click", function () {
//   console.log("You clicked on rock!");
// });
