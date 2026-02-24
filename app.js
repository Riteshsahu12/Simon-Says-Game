let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

h4.innerText = "Tap screen or press any key to start";

function startGame() {
  if (!started) {
    started = true;
    levelUp();
  }
}

// start on keypress
document.addEventListener("keypress", startGame);

// start on click BUT not on game buttons
document.addEventListener("click", function (event) {
  if (!started && !event.target.classList.contains("btn")) {
    startGame();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 200);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => btn.classList.remove("userFlash"), 200);
}

function levelUp() {
  userSeq = [];
  level++;
  h4.innerText = `Level ${level}`;

  let randidx = Math.floor(Math.random() * 4);
  let randColor = btns[randidx];
  let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  btnFlash(randbtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 600);
    }
  } else {
    h4.innerHTML = `❌ Game Over! Your Score was <b>${level - 1}</b><br>Tap or press key to restart`;

    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 200);

    reset();
  }
}

function btnPress(event) {
  event.stopPropagation(); // prevent restart click

  if (!started) return;

  userFlash(this);
  let userColor = this.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
