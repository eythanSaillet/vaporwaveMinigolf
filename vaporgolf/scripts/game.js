let ballVisual = document.querySelector("#game_ball")
let mapVisual = document.querySelector(".game_map")
let cursorVisual = document.querySelector(".game_cursor")
let barrierVisual = document.querySelector(".game_barrier")

let onePlayer = document.querySelector(".playerOne")
let twoPlayer = document.querySelector(".playerTwo")
let threePlayer = document.querySelector(".playerThree")
let fourPlayer = document.querySelector(".playerFour")
let fivePlayer = document.querySelector(".playerFive")
let sixPlayer = document.querySelector(".playerSix")

console.log(onePlayer)

let move

let ball = {
  posX : 150,
  posY : 70,

  dirX : 0,
  dirY : 10,
  step : 10,
  timer : 25,
}

let levelA = {
  posXInit : 150,
  posYInit : 70,

  win : function(){

    if(ball.posY>476 && ball.posY<503 && ball.posX>137 && ball.posX<163){
      console.log("win")
      window.clearInterval(move)
      win()
      setTimeout(
        function(){
          ballVisual.style.display = "none"
        }
        ,50
      )
    }
  },

  blowUp : function(){
    if (ball.posY<=0) {
      window.clearInterval(move)
      blowUp()
    }
  },

}

let bounce = 0
let playProcess = false
let cursorAngle = 0

// Info level

let level = 1

// Variables infos joueurs

let score = [0,0,0,0,0,0]
let playerColor = ["","#FF1493","#00FF00","#FFFF00","#9400D3","#FFFFFF","#FFA500"]

// Variables nombre de Joueurs

let playerNumber = 6
let playerTab = []

let currentlyPlayerNumber = 1
let currentlyPlayer = ""

for (var i = 0; i < playerNumber; i++) {
  let tempI = i+1
  playerTab.push("player"+tempI)
}

// Définition nombre de joueurs

onePlayer.addEventListener('click', function(){
  console.log("1 joueur")
})

console.log(playerTab)

// Position de base de la balle

ballVisual.style.left = ball.posX+"px"
ballVisual.style.bottom = ball.posY+"px"
// ball.style.transform = "translateX("+posX+"px)" + " translateY("+posY+"px)"


// EVENT Click / Entrer --> Lancer la balle

mapVisual.addEventListener("click", play)

window.addEventListener('keydown', (e) => {
      if(e.code == "Enter"){
        play()
      }
    }
  )


// Clignotement barrière rouge

setInterval(function(){
  barrierVisual.style.boxShadow = "0px 0px 40px 0px red"
  setTimeout(function(){
    barrierVisual.style.boxShadow = "0px 0px 40px 10px red"
  }
  ,250
)
}
,500
)

// Fonction PLAY + test WIN

function play(){
  if (playProcess == false) {
    move = setInterval(
      function(){

        ball.posX += ball.dirX
        ball.posY += ball.dirY

        playProcess = true

        // Rebonds bordures

        if(ball.posX>=300 || ball.posX<=-10){
          ball.dirX=-ball.dirX
          bounce +=1
          console.log(bounce)
        }
        if(ball.posY>=600 || ball.posY<=0){
          ball.dirY=-ball.dirY
          bounce +=1
          console.log(bounce)
        }

        requestAnimationFrame(function() {

          // Actualisation du visuel de la ball

          ballVisual.style.left = ball.posX+"px"
          ballVisual.style.bottom = ball.posY+"px"

          cursorVisual.style.display = "none"

        })

        // Test Win

        levelA.win()

        // Test blowUp

        levelA.blowUp()

      }
      ,ball.timer)
  }
}

// Fonction convertisseur

let toDegree = function (radians) {
    return radians * (180 / Math.PI);
}

let toRadian = function (deg) {
    return deg / 180 * Math.PI;
}

// Curseur choix angle de lancement

window.addEventListener('keydown', (e) => {
  if(e.code == "ArrowLeft" && playProcess == false){
    cursorAngle = cursorAngle-5
    cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"
    ball.dirX=Math.round(Math.sin(toRadian(cursorAngle))*ball.step)
    ball.dirY=Math.round(Math.cos(toRadian(cursorAngle))*ball.step)
  }
  if(e.code == "ArrowRight" && playProcess == false){
    cursorAngle = cursorAngle+5
    cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"
    ball.dirX=Math.round(Math.sin(toRadian(cursorAngle))*ball.step)
    ball.dirY=Math.round(Math.cos(toRadian(cursorAngle))*ball.step)
  }
})

// Fonction reset ball

function resetBall(){

  setTimeout(
    function(){

      playProcess = false

      // ball

      ball.posX = levelA.posXInit
      ball.posY = levelA.posYInit

      ballVisual.style.left = levelA.posXInit+"px"
      ballVisual.style.bottom = levelA.posYInit+"px"
      ballVisual.style.display = "block"

      // ball level 3

      if(level==3){
        console.log("level3")
      }


      // Curseur

      cursorAngle = 0
      ball.dirX = 0
      ball.dirY = 10
      cursorVisual.style.display = "block"
      cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"

    }
    ,500
  )
}

// Fonction WIN --> point

function win(){
  console.log("Le joueur "+currentlyPlayerNumber+" a fait "+bounce+" rebond(s).")

  score[currentlyPlayerNumber] += bounce

  bounce = 0
  currentlyPlayerNumber += 1
  resetBall()
  nextPlayer()
}

// Tour par Tour

function nextPlayer(){

  if(currentlyPlayerNumber>playerNumber){
    currentlyPlayerNumber -= playerNumber
  }

  currentlyPlayer = playerTab[currentlyPlayerNumber-1]
  console.log(currentlyPlayer)

  ballVisual.style.backgroundColor= playerColor[currentlyPlayerNumber]
  ballVisual.style.boxShadow = "0px 0px 40px 10px " + playerColor[currentlyPlayerNumber]

}

nextPlayer()


// Fonction explosion

function blowUp(){

  // Animation

  ballVisual.style.boxShadow = "0px 0px 1000px 100px" + playerColor[currentlyPlayerNumber]
  console.log("blow")

  // Reset position

  setTimeout(function(){

    playProcess = false

    playProcess = false

    // ball

    ball.posX = levelA.posXInit
    ball.posY = levelA.posYInit

    ballVisual.style.left = levelA.posXInit+"px"
    ballVisual.style.bottom = levelA.posYInit+"px"
    ballVisual.style.display = "block"

    // ball

    if(level == 3){
      console.log("level3")
    }

      // Curseur

    cursorAngle = 0
    ball.dirX = 0
    ball.dirY = 10
    cursorVisual.style.display = "block"
    cursorVisual.style.transform = "rotate("+cursorAngle+"deg)"
    ballVisual.style.boxShadow = "0px 0px 100px 20px" + playerColor[currentlyPlayerNumber]

    }
    ,125
  )
}
