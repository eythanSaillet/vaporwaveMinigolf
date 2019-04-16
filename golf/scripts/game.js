let ball = document.querySelector("#ball")
let map = document.querySelector(".map")
let cursor = document.querySelector(".cursor")
let barrier = document.querySelector(".barrier")
let bounceSound = document.querySelector("#bounceSound")

let timer = 25
let step = 10
let bounce = 0
let playProcess = false

let posX = 150
let posY = 70

let dirX = 0
let dirY = 10

let cursorAngle = 0

// Nombre de Joueurs

let playerNumber = 3
let playerTab = []

let currentlyPlayer = 1

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

map.addEventListener("click", play)

window.addEventListener('keydown', (e) => {
      if(e.code == "Enter"){
        play()
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
            playProcess = false
            setTimeout(
              function(){
                ball.style.display = "none"
                window.clearInterval(move)
              }
              ,50
            )
          }

          ball.style.left = posX+"px"
          ball.style.bottom = posY+"px"

          cursor.style.display = "none"})

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
  if(e.code == "ArrowLeft"){
    cursorAngle = cursorAngle-5
    cursor.style.transform = "rotate("+cursorAngle+"deg)"
    dirX=Math.round(Math.sin(toRadian(cursorAngle))*step)
    dirY=Math.round(Math.cos(toRadian(cursorAngle))*step)
  }
  if(e.code == "ArrowRight"){
    cursorAngle = cursorAngle+5
    cursor.style.transform = "rotate("+cursorAngle+"deg)"
    dirX=Math.round(Math.sin(toRadian(cursorAngle))*step)
    dirY=Math.round(Math.cos(toRadian(cursorAngle))*step)
  }
})

// Tour par Tour

if (true) {

}
