const mapVisual = document.querySelectorAll(".game_map")
const mapVisualA = document.querySelector(".level1")
const mapVisualB = document.querySelector(".level2")

// Selection des p --> board d'informations
const pScore1 = document.querySelector("div.color1 p")
const pScore2 = document.querySelector("div.color2 p")
const pScore3 = document.querySelector("div.color3 p")
const pScore4 = document.querySelector("div.color4 p")
const pScore5 = document.querySelector("div.color5 p")
const pScore6 = document.querySelector("div.color6 p")

const pBounce = document.querySelector(".pBounce")
const pLevel = document.querySelector(".pLevel")
const hPlayer = document.querySelector(".section_gamePlay_winnerName h1")

// Selection du scoreboard div + h1

const divScore1 = document.querySelector("div.color1")
const divScore2 = document.querySelector("div.color2")
const divScore3 = document.querySelector("div.color3")
const divScore4 = document.querySelector("div.color4")
const divScore5 = document.querySelector("div.color5")
const divScore6 = document.querySelector("div.color6")

const hScore1 = document.querySelector("div.color1 h1")
const hScore2 = document.querySelector("div.color2 h1")
const hScore3 = document.querySelector("div.color3 h1")
const hScore4 = document.querySelector("div.color4 h1")
const hScore5 = document.querySelector("div.color5 h1")
const hScore6 = document.querySelector("div.color6 h1")

// Sounds

const bounceSound = new Audio ('sounds/bounce.mp3')
const launchSound = new Audio ('sounds/golfhitball.mp3')
const selectionSound = new Audio ('sounds/selection-sound.mp3')


const barrierVisual = document.querySelector(".game_barrier")

let level1 = document.querySelector(".level1")
let level2 = document.querySelector(".level2")

let onePlayer = document.querySelector(".playerOne")
let twoPlayer = document.querySelector(".playerTwo")
let threePlayer = document.querySelector(".playerThree")
let fourPlayer = document.querySelector(".playerFour")
let fivePlayer = document.querySelector(".playerFive")
let sixPlayer = document.querySelector(".playerSix")

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

  brick : function(){
    if(ball.posX >= 130 && ball.posX <= 170 && ball.posY>=270 && ball.posY<=280){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 130 && ball.posX <= 170 && ball.posY>=320 && ball.posY<=330){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 120 && ball.posX <= 130 && ball.posY>=270 && ball.posY<=330){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 170 && ball.posX <= 180 && ball.posY>=270 && ball.posY<=330){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  },


}

// Level objet 2

let levelB = {

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

  brick1 : function(){
    if(ball.posX >= 120 && ball.posX <= 180 && ball.posY>=430 && ball.posY<=440){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 120 && ball.posX <= 180 && ball.posY>=450 && ball.posY<=460){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 110 && ball.posX <= 125 && ball.posY>=430 && ball.posY<=460){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 180 && ball.posX <= 190 && ball.posY>=430 && ball.posY<=460){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  },

  brick2 : function(){
    if(ball.posX >= 180 && ball.posX <= 220 && ball.posY>=160 && ball.posY<=170){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 180 && ball.posX <= 220 && ball.posY>=180 && ball.posY<=190){
      ball.dirY = -ball.dirY
      refreshBounce()
    }
    if(ball.posX >= 170 && ball.posX <= 180 && ball.posY>=160 && ball.posY<=190){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
    if(ball.posX >= 220 && ball.posX <= 230 && ball.posY>=160 && ball.posY<=190){
      ball.dirX = -ball.dirX
      refreshBounce()
    }
  }

}

let bounce = 0
let playProcess = false
let cursorAngle = 0

// Info level

let level = 1
let totalLevel = 2

// Variables infos joueurs

let score = [0,0,0,0,0,0]
let playerColor = ["","#FF1493","#00FF00","#FFFF00","#9400D3","#FFFFFF","#FFA500"]

// Variables nombre de Joueurs

let playerNumber
let playerTab = []

let currentlyPlayerNumber = 1
let currentlyPlayer = ""

// Création de la ball et du Curseur

const ballVisual = document.createElement("div")
const  cursorVisual = document.createElement("div")
cursorVisual.classList.add("game_cursor")
ballVisual.setAttribute("id", "game_ball");
ballVisual.appendChild(cursorVisual)
mapVisualA.appendChild(ballVisual)

// Définition nombre de joueurs

onePlayer.addEventListener('click', function(){
  playerNumber = 1
  playerTabCreation()
  divScore2.style.borderColor = "grey"
  hScore2.style.color = "grey"
  pScore2.style.color = "grey"
  divScore3.style.borderColor = "grey"
  hScore3.style.color = "grey"
  pScore3.style.color = "grey"
  divScore4.style.borderColor = "grey"
  hScore4.style.color = "grey"
  pScore4.style.color = "grey"
  divScore5.style.borderColor = "grey"
  hScore5.style.color = "grey"
  pScore5.style.color = "grey"
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"
})

twoPlayer.addEventListener('click', function(){
  playerNumber = 2
  playerTabCreation()
  divScore3.style.borderColor = "grey"
  hScore3.style.color = "grey"
  pScore3.style.color = "grey"
  divScore4.style.borderColor = "grey"
  hScore4.style.color = "grey"
  pScore4.style.color = "grey"
  divScore5.style.borderColor = "grey"
  hScore5.style.color = "grey"
  pScore5.style.color = "grey"
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"
})

threePlayer.addEventListener('click', function(){
  playerNumber = 3
  playerTabCreation()
  divScore4.style.borderColor = "grey"
  hScore4.style.color = "grey"
  pScore4.style.color = "grey"
  divScore5.style.borderColor = "grey"
  hScore5.style.color = "grey"
  pScore5.style.color = "grey"
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"
})

fourPlayer.addEventListener('click', function(){
  playerNumber = 4
  playerTabCreation()
  divScore5.style.borderColor = "grey"
  hScore5.style.color = "grey"
  pScore5.style.color = "grey"
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"
})

fivePlayer.addEventListener('click', function(){
  playerNumber = 5
  playerTabCreation()
  divScore6.style.borderColor = "grey"
  hScore6.style.color = "grey"
  pScore6.style.color = "grey"
})

sixPlayer.addEventListener('click', function(){
  playerNumber = 6
  playerTabCreation()
})

function playerTabCreation(){
  selectionSound.play()
  for (var i = 0; i < playerNumber; i++) {
    let tempI = i+1
    playerTab.push("player"+tempI)
  }
  console.log(playerTab)
}

// Fonction refresh scores

function refreshScore(){
  pScore1.innerHTML = score[0]
  pScore2.innerHTML = score[1]
  pScore3.innerHTML = score[2]
  pScore4.innerHTML = score[3]
  pScore5.innerHTML = score[4]
  pScore6.innerHTML = score[5]

}

// Fonction refresh bounce

function refreshBounce(){
  bounceSound.play()
  bounce +=1
  pBounce.innerHTML = bounce
}

// Fonction refresh level info

function refreshLevel(){
  pLevel.innerHTML = level
}

// Fonction refresh joueur actuel

function refreshPlayer(){
  hPlayer.innerHTML = "JOUEUR " + currentlyPlayerNumber
  hPlayer.style.color = playerColor[currentlyPlayerNumber]
}

refreshPlayer()

// Position de base de la balle

ballVisual.style.left = ball.posX+"px"
ballVisual.style.bottom = ball.posY+"px"

// EVENT Click / Entrer --> Lancer la balle


window.addEventListener('keydown', (e) => {
      if(e.code == "Enter"){
        play()
      }
    }
  )

mapVisual.forEach(function(e){
  e.addEventListener('click', play)
})


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

// Fonction PLAY + test WIN, Blow UP, bounce

function play(){
  if (playProcess == false) {
    launchSound.play()
    move = setInterval(
      function(){

        ball.posX += ball.dirX
        ball.posY += ball.dirY

        playProcess = true

        // Rebonds bordures

        if(ball.posX>=300 || ball.posX<=-10){
          ball.dirX=-ball.dirX
          refreshBounce()
        }
        if(ball.posY>=610 || ball.posY<=0){
          ball.dirY=-ball.dirY
          refreshBounce()
        }

        requestAnimationFrame(function() {

          // Actualisation du visuel de la ball

          ballVisual.style.left = ball.posX+"px"
          ballVisual.style.bottom = ball.posY+"px"

          cursorVisual.style.display = "none"

          console.log(ball.posX,ball.posY)

        })

        // Test Win

        if(level == 1){
          levelA.win()
        }

        if(level == 2 && playProcess == true){
          levelB.win()
        }

        // Test blowUp

        if(level == 1){
          levelA.blowUp()
        }
        if(level == 2){
          levelB.blowUp()
        }

        // Collision brick & autres

        if (level == 1) {
          levelA.brick()
        }

        if (level == 2) {
          levelB.brick1()
          levelB.brick2()
        }

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

      pBounce.innerHTML = 0
      refreshPlayer()

    }
    ,500
  )
}

// Fonction WIN --> point

function win(){
  console.log("Le joueur "+currentlyPlayerNumber+" a fait "+bounce+" rebond(s).")
  playProcess = false

  score[currentlyPlayerNumber-1] += bounce

  bounce = 0
  currentlyPlayerNumber += 1
  resetBall()
  nextPlayer()
  refreshScore()
}

// Tour par Tour

function nextPlayer(){

  if(currentlyPlayerNumber>playerNumber){
    currentlyPlayerNumber -= playerNumber
    currentlyPlayer = playerTab[currentlyPlayerNumber-1]
    level +=1
    nextLevel()
  }

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

function nextLevel(){

  console.log(currentlyPlayerNumber)
  if (level == 2) {
    setTimeout(function(){
      level1.style.display = "none"
      level2.style.display = "block"
      mapVisualA.removeChild(ballVisual)
      mapVisualB.appendChild(ballVisual)
      refreshLevel()
    }
  ,300)
  }
}


// Ranking Process

function sortRanking(a,b){
  if (a<b) return -1
  else if (a>b) return 1
  else return 0
}

let newOrder = score.slice(0).sort(sortRanking)

for(let i = 0; i < newOrder.length; i++){
	console.log(score.indexOf(newOrder[i]))
}

// Fonction affichage classement

if(level == totalLevel+1){
  console.log("affichage scoreboard")
}
