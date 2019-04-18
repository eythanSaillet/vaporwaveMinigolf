let music = new Audio ('sounds/music.mp3');


let playerSelector = document.querySelectorAll(".section_numberPlayer_player")
let numberPlayerMenu = document.querySelector(".section_numberPlayer")
let pageNumberPlayerHeader = document.querySelector(".section_numberPlayer_header")
let pageNumberPlayerbutton = document.querySelector(".button")
let pageGamePlay = document.querySelector(".section_gamePlay")
let pageGamePlayScore = document.querySelector(".section_gamePlay_Score")
let pageGamePlayScoreButton = document.querySelector(".section_gamePlay_winnerName")
let pageGamePlayScoreRejouer = document.querySelector(".section_gamePlay_finalScore_score_rejouer")
let gamePlayOptionSongOn= document.querySelector(".section_gamePlay_winner_historical_option_song")
let gamePlayOptionSongOff= document.querySelector(".section_gamePlay_winner_historical_option_songOff")
let gamePlayOptionResart = document.querySelector(".section_gamePlay_winner_historical_option_restart_img")
let gamefinalScoreButton = document.querySelector(".section_gamePlay_finalScore_score_rejouer")





//TRUC A COLLER DANS LE FICHIER GAME
let scorePlayerRank1 = document.querySelector(".Score_player_rank1")
let scorePlayerRank2 = document.querySelector(".Score_player_rank2")
let scorePlayerRank3 = document.querySelector(".Score_player_rank3")
let scorePlayerRank4 = document.querySelector(".Score_player_rank4")
let scorePlayerRank5 = document.querySelector(".Score_player_rank5")
let scorePlayerRank6 = document.querySelector(".Score_player_rank6")



//REFRESH PAGE
gamePlayOptionResart.addEventListener(
  "click",
  function(){
    document.location.reload(true)
  }
)

gamefinalScoreButton.addEventListener(
  "click",
  function(){
    document.location.reload(true)
  }
)

//BOUTON MUSIC
gamePlayOptionSongOn.addEventListener(
  "click",
  function(){
    gamePlayOptionSongOn.style.visibility="hidden"
    gamePlayOptionSongOff.style.visibility="visible"
    music.pause();
  }
)

gamePlayOptionSongOff.addEventListener(
  "click",
  function(){
    gamePlayOptionSongOff.style.visibility="hidden"
    gamePlayOptionSongOn.style.visibility="visible"
    music.play();
  }
)




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
        music.play();
      }
    )
  }
)
