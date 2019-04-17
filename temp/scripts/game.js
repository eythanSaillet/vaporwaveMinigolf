let ball = document.querySelector("#game_ball")
let map = document.querySelector(".game_map")
let cursor = document.querySelector(".game_cursor")
let barrier = document.querySelector(".game_barrier")

// SON

// let bounceSound = new Audio('sounds/bounce.mp3');
// bounceSound.play();

let timer = 25
let step = 10
let bounce = 0
let playProcess = false

// Variables directions

let posXInit = 150
let posYInit = 70

let posX = 150
let posY = 70

let dirX = 0
let dirY = 10

let cursorAngle = 0

// Variables infos joueurs

let score1 = 0, score2 = 0, score3 = 0, score4 = 0, score5 = 0, score6 = 0
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

console.log(playerTab)
console.log(playerNumber)

// Position de base de la balle

ball.style.left = posX+"px"
ball.style.bottom = posY+"px"
// ball.style.transform = "translateX("+posX+"px)" + " translateY("+posY+"px)"


// EVENT Click / Entrer --> Lancer la balle

map.addEventListener("click", ()=>{play()})

window.addEventListener('keydown', (e) => {
      if(e.code == "Enter"){
        play()
        console.log('done')
      }
    }
  )


// Clignotement barrière rouge

setInterval(function(){
  barrier.style.boxShadow = "0px 0px 40px 0px red"
  setTimeout(function(){
    barrier.style.boxShadow = "0px 0px 40px 10px red"
  }
  ,250
)
}
,500
)

// Fonction PLAY + test WIN

function play(){
  if (playProcess == false) {
    let move = setInterval(
      function(){

        requestAnimationFrame(function() {

          posX = posX + dirX
          posY = posY + dirY

          playProcess = true

          if(posX>=300 || posX<=-10){
            dirX=-dirX
            bounce +=1
            console.log(bounce)
          }
          if(posY>=600 || posY<=0){
            dirY=-dirY
            bounce +=1
            console.log(bounce)
          }


          // Test Win

          if(posY>476 && posY<503 && posX>137 && posX<163){
            console.log("win")
            window.clearInterval(move)
            win()
            setTimeout(
              function(){
                ball.style.display = "none"
              }
              ,50
            )
          }

          ball.style.left = posX+"px"
          ball.style.bottom = posY+"px"

          cursor.style.display = "none"

          // Test blowUp

          if (posY<=0) {
            window.clearInterval(move)
            blowUp()
          }

        })

      }
      ,timer)
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
    cursor.style.transform = "rotate("+cursorAngle+"deg)"
    dirX=Math.round(Math.sin(toRadian(cursorAngle))*step)
    dirY=Math.round(Math.cos(toRadian(cursorAngle))*step)
  }
  if(e.code == "ArrowRight" && playProcess == false){
    cursorAngle = cursorAngle+5
    cursor.style.transform = "rotate("+cursorAngle+"deg)"
    dirX=Math.round(Math.sin(toRadian(cursorAngle))*step)
    dirY=Math.round(Math.cos(toRadian(cursorAngle))*step)
  }
})

// Fonction reset ball

function resetBall(){

  setTimeout(
    function(){

      playProcess = false

      // ball

      posX = posXInit
      posY = posYInit

      ball.style.left = posXInit+"px"
      ball.style.bottom = posYInit+"px"
      ball.style.display = "block"


      // Curseur

      cursorAngle = 0
      dirX = 0
      dirY = 10
      cursor.style.display = "block"
      cursor.style.transform = "rotate("+cursorAngle+"deg)"

    }
    ,500
  )
}

// Fonction WIN --> point

function win(){
  console.log("Le joueur "+currentlyPlayerNumber+" a fait "+bounce+" rebond(s).")

  if (currentlyPlayerNumber == 1) {
    score1 += bounce
    console.log("Son score est maintenant de "+score1)
  }

  if (currentlyPlayerNumber == 2) {
    score2 += bounce
    console.log("Son score est maintenant de "+score2)
  }

  if (currentlyPlayerNumber == 3) {
    score3 += bounce
    console.log("Son score est maintenant de "+score3)
  }

  if (currentlyPlayerNumber == 4) {
    score4 += bounce
    console.log("Son score est maintenant de "+score4)
  }

  if (currentlyPlayerNumber == 5) {
    score5 += bounce
    console.log("Son score est maintenant de "+score5)
  }

  if (currentlyPlayerNumber == 6) {
    score6 += bounce
    console.log("Son score est maintenant de "+score6)
  }
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

  ball.style.backgroundColor= playerColor[currentlyPlayerNumber]
  ball.style.boxShadow = "0px 0px 40px 10px " + playerColor[currentlyPlayerNumber]

}

nextPlayer()


// Fonction explosion

function blowUp(){

  // Animation

  ball.style.boxShadow = "0px 0px 1000px 100px" + playerColor[currentlyPlayerNumber]
  console.log("blow")

  // Reset position

  setTimeout(function(){

    playProcess = false

    // ball

    posX = posXInit
    posY = posYInit

    ball.style.left = posXInit+"px"
    ball.style.bottom = posYInit+"px"
    ball.style.display = "block"


      // Curseur

    cursorAngle = 0
    dirX = 0
    dirY = 10
    cursor.style.display = "block"
    cursor.style.transform = "rotate("+cursorAngle+"deg)"
    ball.style.boxShadow = "0px 0px 100px 20px" + playerColor[currentlyPlayerNumber]

    }
    ,150
  )
}
