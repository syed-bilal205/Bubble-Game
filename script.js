//? making bubble function

function makeBubbles() {
  let bubbles = "";

  for (let index = 1; index < 169; index++) {
    const randomNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector(".panelBottom").innerHTML = bubbles;
}

//? timer function

let timer = 60;
function timerFunc() {
  let clearTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer").textContent = timer;
    } else {
      clearInterval(clearTimer);
      document.querySelector(
        ".panelBottom"
      ).innerHTML = `<h1>Time Up Your Score Is ${score}</h1>`;
    }
  }, 1000);
}

//? changing randomly hit value
let randomNumber;
function hitFunc() {
  randomNumber = Math.floor(Math.random() * 10);
  document.querySelector(".hitValue").textContent = randomNumber;
}

let score = 0;
let scoreTable = document.querySelector(".score");
function scoreFunc() {
  score += 10;
  scoreTable.textContent = score;
}

const pannelBottom = document
  .querySelector(".panelBottom")
  .addEventListener("click", function (e) {
    // console.log(e.target.textContent);
    const bubbleNumber = Number(e.target.textContent);
    if (bubbleNumber === randomNumber) {
      scoreFunc();
      hitFunc();
      makeBubbles();
      document.querySelector(".wrongSelected").innerHTML = ``;
    } else {
      document.querySelector(
        ".wrongSelected"
      ).innerHTML = `<p>YOU SELECT THE WRONG BUBBLE</p>`;
      scoreTable.textContent = score = 0;
    }
  });

hitFunc();
timerFunc();
makeBubbles();
