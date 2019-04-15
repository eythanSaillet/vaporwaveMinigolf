let ball = document.querySelector("#ball")
let map = document.querySelector(".map")
let cursor = document.querySelector(".cursor")

let speed = 10

let posX = 150
let posY = 550

let dirX = 1
let dirY = -1

let cursorAngle = 180


ball.style.top=posY+"px"
ball.style.left=posX+"px"

map.addEventListener("click", play)


function play(){
  setInterval(
    function(){
      posX = posX + dirX
      posY = posY + dirY

      if(posX>300 || posX<0){
        dirX = -dirX
      }
      if(posY>600 || posY<0){
        dirY = -dirY
      }

      ball.style.top=posY+"px"
      ball.style.left=posX+"px"
    }
    ,speed)
}


window.addEventListener('keydown', (e) => {
  if(e.code == "KeyQ"){
    cursorAngle = cursorAngle-10
    cursor.style.transform = "rotate("+cursorAngle+"deg)"
  }
  if(e.code == "KeyW"){
    cursorAngle = cursorAngle+10
    cursor.style.transform = "rotate("+cursorAngle+"deg)"
  }
})
