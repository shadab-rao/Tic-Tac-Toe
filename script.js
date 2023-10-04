let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check a win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2,5,5,0],
    [3, 4, 5,5,15,0],
    [6, 7, 8,5,25,0],
    [0, 3, 6, -5,15,90],
    [1, 4, 7, 5,15,90],
    [2, 5, 8, 15,15,90],
    [0, 4, 8, 5,15,45],
    [2, 4, 6, 5,15,135],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML &&
      boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML &&
      boxtexts[e[0]].innerHTML !== ""
      
    ) {
      document.querySelector(".info").innerHTML = boxtexts[e[0]].innerHTML + " Won";
      isgameover = true;
     
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;
      gameover.play();
    }
   
    
  });
};

// game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerHTML === "") {
      boxtext.innerHTML = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerHTML =
          "Turn for " + turn;
      }
    }
  });
});

// Reset event
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerHTML = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerHTML = "Turn for  " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
