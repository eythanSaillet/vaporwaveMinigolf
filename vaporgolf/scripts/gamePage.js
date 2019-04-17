let music = new Audio ('sounds/music.mp3');

setTimeout(() => {
  music.play();
  music.volume=0.15;
},500)

let playerSelector = document.querySelectorAll(".section_numberPlayer_player")
let numberPlayerMenu = document.querySelector(".section_numberPlayer")
let pageNumberPlayerHeader = document.querySelector(".section_numberPlayer_header")
let pageNumberPlayerbutton = document.querySelector(".button")
let pageGamePlay = document.querySelector(".section_gamePlay")
let pageGamePlayScore = document.querySelector(".section_gamePlay_Score")
let pageGamePlayScoreButton = document.querySelector(".section_gamePlay_winnerName")
let pageGamePlayScoreRejouer = document.querySelector(".section_gamePlay_finalScore_score_rejouer")

console.log(pageNumberPlayerbutton)


pageNumberPlayerbutton.addEventListener(
  "click",
  function(){
    pageNumberPlayerHeader.style.display="none"
    numberPlayerMenu.style.visibility="visible"
  }
)

pageGamePlayScoreButton.addEventListener(
  "click",
  function(){
    pageGamePlay.style.display="none"
    pageGamePlayScore.style.visibility="visible"
  }
)

pageGamePlayScoreRejouer.addEventListener(
  "click",
  function(){
    pageGamePlayScore.style.display="none"
    pageNumberPlayerHeader.style.visibility="visible"

  }
)

playerSelector.forEach(
  function(e){
    e.addEventListener(
      "click",
      function(){
        numberPlayerMenu.style.display="none"
        pageGamePlay.style.visibility="visible"
        console.log('nn')

      }
    )
  }
)
