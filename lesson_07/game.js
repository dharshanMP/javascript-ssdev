let score = {
  win: 0,
  losses: 0,
};

function game(guess) {
  if (guess === "heads") {
    console.log("It's head");
    score.win += 1;
    console.log(score);
  } else {
    console.log("It's tails");
    score.losses += 1;
    console.log(score);
  }
  console.log((document.querySelector(".js-head-button").innerHTML = "Heads"));
  console.log((document.querySelector(".js-tail-button").innerHTML = "Tails"));
}
