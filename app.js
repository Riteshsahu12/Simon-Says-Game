// let gameSeq = []; //empty array
// let userSeq = []; //empty array initialise

// let btns = ["yellow","red","purple","green"];

// let started = false; //abhi game start nahi hua //game ek hi bar start hoga
// let level = 0;

// let h4 = document.querySelector("h4");

// document.addEventListener("keypress", function () {
//   if(started == false){
//     console.log("Game Started");
//     started = true; //ab koi key press karenge to game stated nahi hoga kyu ki game already start ho chuka hai

//     levelUp();
//   }

// });

// function btnFlash(){
//   btn.classList.add("flash");

//   setTimeout(function(){
//     btn.classList.remove("flash")
//   }, 200);
// }

// function userFlash(){
//   btn.classList.add("userFlash");

//   setTimeout(function(){
//     btn.classList.remove("userFlash")
//   }, 200);
// }
// function levelUp(){
//   level++;
//   h4.innerText = `Level ${level}`;

//   //random button choose
//   let randidx =Math.floor(Math.random() * 4);
//   let randColor = btns[randidx];
//   let randbtn = document.querySelector(`.${randColor}`);
//   console.log(randidx)
//   console.log(randColor)
//   console.log(randbtn)
//   btnFlash(randbtn);
// }

// function btnPress(){
//   // console.log(this); //wahi button hoga jisko ham click kiye hai
//   console.log(this);
//   let bbtn = this;
//   userFlash(bbtn);
// }

// let allBtns = document.querySelectorAll(".btn");
// for(let b of allBtns){
//   btn.addEventListener("click", btnPress);
// }

let gameSeq = []; // empty array
let userSeq = []; // empty array initialise

let btns = ["yellow", "red", "purple", "green"];

let started = false; // game not started
let level = 0;

let h4 = document.querySelector("h4");
let btn = document.querySelector(".btn");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;

    levelUp();
  }
});

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

  // random button choose
  let randidx = Math.floor(Math.random() * 4);
  let randColor = btns[randidx];
  let randbtn = document.querySelector(`.${randColor}`);

  console.log(randidx);
  console.log(randColor);
  console.log(randbtn);

  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randbtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h4.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start the game.`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },150)
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
