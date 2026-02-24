let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

h4.innerText = "Tap screen or press any key to start";

// start game — works for desktop + mobile
function startGame() {
  if (!started) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
}

document.addEventListener("keypress", startGame);
document.addEventListener("click", startGame);

function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
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
      setTimeout(levelUp, 500);
    }
  } else {
    h4.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Tap or press key to restart`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

function btnPress() {
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
